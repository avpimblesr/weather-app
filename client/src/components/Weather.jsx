import React from 'react'
import HourlyForecast from './HourlyForecast';
import MultiDayForecast from './MulitDayForecast';

export default function Weather(props) {
  return (
    <div className="container">
      <HourlyForecast />
      <MultiDayForecast />
    </div>
  )
}
