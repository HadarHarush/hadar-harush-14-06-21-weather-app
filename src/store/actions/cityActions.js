import { accuWeatherService } from '../../services/accuWeatherService'
import { setCityStatus } from './uiActions'
import { eventBusService } from '../../services/eventBusService'

// Thunk - Action Dispatcher
export function setCity(city) {
  return (dispatch) => {
    const action = {
      type: 'SET_CITY',
      city,
    }
    dispatch(action)
  }
}

export function loadFullCity(cityDetails) {
  return async (dispatch) => {
    dispatch(setCityStatus('loading'))
    try {
      const weather = await accuWeatherService.getWeather(cityDetails.Key)
      const forecasts = await accuWeatherService.getForecasts(cityDetails.Key)

      const action = {
        type: 'SET_CITY',
        city: {
          details: cityDetails,
          weather,
          forecasts,
        },
      }
      dispatch(action)
      dispatch(setCityStatus('fulfilled'))
    } catch (error) {
      eventBusService.emit('notif', {
        type: 'error',
        txt: `Couldn't load ${cityDetails.LocalizedName}. Check your internet connection, and make sure that you did'nt exceeded the daily weather requests`,
      })
      dispatch(setCityStatus('error'))
    }
  }
}
