import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './styles/style.scss';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/login';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

class App extends React.Component{
  constructor(props){
    super();
  }

  render(){
    return(
      <Router>
        <div className="app">
          <header>
            <ul className="navbar">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
            <ul className="user-info">
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </header>
          <main>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/protected" component={Home}/>
          </main>
          <footer>
            <p>&copy; Lorem Ipsum Inc. 2017</p>
          </footer>
        </div>
      </Router>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
