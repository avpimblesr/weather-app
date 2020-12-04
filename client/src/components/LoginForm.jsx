import React from 'react'


class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = ({
      email:'',
      password:''
    })
  }
  
  render() {
    return (
      <div className="container">
        <form>
          <h3>Log In</h3><br />
          <section className="form-group">
            <label>Email:</label>
            <input type="email"
              className="form-control" />
          </section>

          <section className="form-group">
            <label>Password:</label>
            <input type="password"
              className="form-control" />
          </section>


          <button className="btn btn-primary" type="submit">Submit</button>
        </form><br />
        <p>Not registered?&nbsp; <a href="javascript void(0)">Register</a></p>
      </div>
    )

  }
}
export default LoginForm;