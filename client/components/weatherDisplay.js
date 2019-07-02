import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Line} from 'react-chartjs-2'
import Temperature from './temperature'
import Humidity from './humidity'
class WeatherDisplay extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>5 Day Forecast </h1>
        <h3>Temperature</h3>
        <Temperature />
        <h3>Humidity</h3>
        <Humidity />
      </div>
    )
  }
}

const mapState = state => ({
  city: state.openWeather.city,
  weather: state.openWeather.list
})

export default connect(
  mapState,
  null
)(WeatherDisplay)
