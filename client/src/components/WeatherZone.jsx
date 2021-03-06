import React from 'react'

export default function WeatherZone(props) {
  return (
    <div className="container">
      <form>
        <h2>Weather Zone</h2><br />
        <p><strong>User Id:</strong> {props.email}user@nomail.com</p>
        <p>You have selected [ <b>90210</b>, <b>20005</b> ]<br />You have a max of 3 and may select 1 more.</p>

        {/* Allow the user to select a zip code - show current and max quantities */}
        <label htmlFor="zipCode">Zip Code</label><br />
        <input type="text" name="zipCode" /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
