import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import WeatherZones from './components/WeatherZones';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Weather or Knot</h1>
        {/* <RegistrationForm /> */}
        <LoginForm />
        {/* <WeatherZones /> */}
      </div>
    );
  }
}
