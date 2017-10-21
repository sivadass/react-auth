import React from 'react';
import axios from 'axios';

class Home extends React.Component {
    constructor(){
      super();
      this.state = {
        articles : []
      }
    }
    componentDidMount(){
      let that = this;
      axios.get('https://www.reddit.com/r/webdev.json')
      .then(function (response) {
        that.setState({
          articles: response.data.data.children
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    render(){
      let renderPosts;
      if (!this.state.articles.length <= 0){
        renderPosts = this.state.articles.map((article, i) => <li key={i}>{article.data.title}</li>);
      } else {
        renderPosts = "Loading..."
      }
      return(
        <div className="home">
          <ul>
            {renderPosts}
          </ul>
        </div>
      )
    }
}

export default Home;