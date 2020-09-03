import React from 'react';
 
class Login extends React.Component {

  state={
    username: "",
    password: "",
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.submitHandler(this.state)
  }


  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h1>Sign Up</h1>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    );
  }
}
 
export default Login;