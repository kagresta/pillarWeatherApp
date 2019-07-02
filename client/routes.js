import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {UserHome} from './components'
import {WeatherDisplay} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={UserHome} />
        <Route exact path="/display" component={WeatherDisplay} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(
  connect(
    null,
    null
  )(Routes)
)

/**
 * PROP TYPES
 */
