import React from 'react'


export default function RegistrationForm() {
  return (
    <div className="container">
      <form>
        <h2>Registration Form</h2><br />
        <label htmlFor="fName">First Name</label><br />
        <input type="text" name="fName" /><br />
        <label htmlFor="lName">Last Name</label><br />
        <input type="text" name="lName" /><br />

        <label htmlFor="email">Email</label><br />
        <input type="email" name="email" /><br />

        <label htmlFor="password">Password</label><br />
        <input type="password" name="password" /><br />
        <label htmlFor="confirmPassword">Confirm Password</label><br />
        <input type="password" name="confirmPassword" /><br /><br />

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}
