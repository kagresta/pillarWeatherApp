import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getWeatherCity, getWeatherCoords} from '../store/openWeather.js'
/**
 * COMPONENT
 */

class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityState: '',
      lat: '',
      long: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitCoords = this.handleSubmitCoords.bind(this)
    this.handleSubmitCityState = this.handleSubmitCityState.bind(this)
  }
  async componentDidMount() {
    if (navigator.geolocation && !window.localStorage.lng) {
      await navigator.geolocation.getCurrentPosition(displayLocationInfo)
      await this.props.getWeatherCoords(
        Math.floor(localStorage.lat),
        Math.floor(localStorage.lng)
      )
      this.props.history.push('/display')
    }

    function displayLocationInfo(position) {
      const lng = position.coords.longitude
      const lat = position.coords.latitude
      window.localStorage.setItem('long', lng)
      window.localStorage.setItem('lat', lat)
      console.log(`longitude: ${lng} | latitude: ${lat}`)
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmitCoords(event) {
    event.preventDefault()
    await this.props.getWeatherCoords(this.state.lat, this.state.long)
    this.setState({
      cityState: '',
      lat: '',
      long: ''
    })
    this.props.history.push('/display')
  }

  async handleSubmitCityState(event) {
    event.preventDefault()
    await this.props.getWeatherCity(this.state.cityState)
    this.setState({
      cityState: '',
      lat: '',
      long: ''
    })
    this.props.history.push('/display')
  }

  render() {
    return (
      <div className="container inputForm">
        <div className="input-group mb-3 inputBox">
          <input
            onChange={this.handleChange}
            type="text"
            className="form-control"
            placeholder="City, State"
            name="cityState"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={this.handleSubmitCityState}
          >
            Submit
          </button>
        </div>

        <div className="input-group mb-3 inputBox">
          <input
            onChange={this.handleChange}
            type="text"
            name="lat"
            aria-label="Latitude"
            className="form-control"
            placeholder="Latitude"
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="long"
            aria-label="Longitude"
            className="form-control"
            placeholder="Longitude"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={this.handleSubmitCoords}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapState = state => ({
  weather: state.openWeather
})
const mapDispatch = dispatch => ({
  getWeatherCity: cityId => dispatch(getWeatherCity(cityId)),
  getWeatherCoords: (lat, long) => dispatch(getWeatherCoords(lat, long))
})

export default connect(
  mapState,
  mapDispatch
)(UserHome)

/**
 * PROP TYPES
 */
