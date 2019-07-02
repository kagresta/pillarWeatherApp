import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>Weather App</h1>
    <nav>
      <div>
        <Link to="/">Get forecast for a different location</Link>
      </div>
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */

export default connect(
  null,
  null
)(Navbar)

/**
 * PROP TYPES
 */
