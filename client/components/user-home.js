import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getWeather} from '../store/openWeather.js'
/**
 * COMPONENT
 */

class UserHome extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container inputForm">
        <div className="input-group mb-3 inputBox">
          <input
            type="text"
            className="form-control"
            placeholder="City, State"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Submit
          </button>
        </div>

        <div className="input-group mb-3 inputBox">
          <input
            type="text"
            aria-label="Latitude"
            className="form-control"
            placeholder="Latitude"
          />
          <input
            type="text"
            aria-label="Longitude"
            className="form-control"
            placeholder="Longitude"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
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
const mapDispatch = dispatch => ({
  getWeather: cityId => dispatch(getWeather(cityId))
})

export default connect(
  null,
  mapDispatch
)(UserHome)

/**
 * PROP TYPES
 */
