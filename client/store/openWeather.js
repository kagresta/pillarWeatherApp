import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_WEATHER = 'GET_WEATHER'

/**
 * INITIAL STATE
 */
const defaultWeather = {
  city: null
}

/**
 * ACTION CREATORS
 */
const gotWeather = weather => ({type: GET_WEATHER, weather})

/**
 * THUNK CREATORS
 */
export const getWeatherCoords = (lat, long) => async dispatch => {
  let res
  try {
    console.log('stuff is happening', lat, long)
    res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=9416173e9daea94ade7368cb7ad9d1a7`
    )
    dispatch(gotWeather(res))
  } catch (err) {
    console.error(err)
  }
}
export const getWeatherCity = cityId => async dispatch => {
  let res
  try {
    res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityId}&units=imperial&appid=9416173e9daea94ade7368cb7ad9d1a7`
    )

    dispatch(gotWeather(res))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultWeather, action) {
  switch (action.type) {
    case GET_WEATHER:
      return action.weather.data

    default:
      return state
  }
}
