import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import WeatherZones from './components/WeatherZones';
import Weather from './components/Weather';
import WeatherZone from './components/WeatherZone';


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Weather or Knot</h1><br /><br />
        {/* <RegistrationForm /> */}
        <LoginForm />
        {/* <WeatherZones /> */}
        {/* <Weather /> */}
        {/* <WeatherZone /> */}
      </div>
    );
  }
}
