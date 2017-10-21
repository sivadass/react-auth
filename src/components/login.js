import React from 'react';

class Login extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div className="login">
                <h2>Welcome!</h2>
                <form>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;