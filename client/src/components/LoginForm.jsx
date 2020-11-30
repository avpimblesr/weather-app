import React from 'react'


export default function LoginForm() {
  return (
    <div className="container">
      <form>
        <h2>Log In</h2><br />
        <label htmlFor="email">Email</label><br />
        <input type="email" name="email" /><br />

        <label htmlFor="password">Password</label><br />
        <input type="password" name="password" /><br /><br />

      <button type="submit">Submit</button>
      </form><br />
      <p>Not registered?&nbsp; <a href="#">Register</a></p>
    </div>
  )
}
