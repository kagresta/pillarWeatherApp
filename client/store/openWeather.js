import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_WEATHER = 'GET_WEATHER'

/**
 * INITIAL STATE
 */
const defaultWeather = {}

/**
 * ACTION CREATORS
 */
const gotWeather = weather => ({type: GET_WEATHER, weather})

/**
 * THUNK CREATORS
 */

export const getWeather = cityId => async dispatch => {
  let res
  try {
    res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=9416173e9daea94ade7368cb7ad9d1a7`
    )
    console.log('the res', res)

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
      return action.weather

    default:
      return state
  }
}
