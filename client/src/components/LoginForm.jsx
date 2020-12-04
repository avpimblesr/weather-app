import React from 'react'


class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = ({
      email:'',
      password:''
    })
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange =this.onPasswordChange.bind(this)
    this.onFormSubmitted = this.onFormSubmitted.bind(this)
  }

  onComponentDidMount() {
    console.log("Component just mounted")
  }

  onComponentDidUpdate() {
    console.log("Component just updated")
  }

  onEmailChange (e) {
    this.setState({
      email: e.target.value
    })
  }

  onPasswordChange (e) {
    this.setState({
      password: e.target.value
    })
  }

onFormSubmitted (e) {
  e.preventDefault()
  console.log("Form has been submitted")
}

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmitted}>
          <h3>Log In</h3><br />
          <section className="form-group">
            <label>Email:</label>
            <input type="email"
              className="form-control" 
              value={this.state.email}
              onChange={this.onEmailChange}
              />
          </section>

          <section className="form-group">
            <label>Password:</label>
            <input type="password"
              className="form-control" 
              value={this.state.password}
              onChange={this.onPasswordChange}
              />
          </section>


          <button className="btn btn-primary" type="submit">Submit</button>
        </form><br />
        <p>Not registered?&nbsp; <a href="javascript void(0)">Register</a></p>
      </div>
    )

  }
}
export default LoginForm;