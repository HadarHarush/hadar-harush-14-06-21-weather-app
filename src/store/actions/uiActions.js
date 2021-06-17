import { accuWeatherService } from '../../services/accuWeatherService'

// Thunk - Action Dispatcher
export function setCityStatus(cityStatus) {
  return (dispatch) => {
    const action = {
      type: 'SET_CITY_STATUS',
      cityStatus,
    }
    dispatch(action)
  }
}

export function setIsDark(isDark) {
  return (dispatch) => {
    const action = {
      type: 'SET_IS_DARK',
      isDark,
    }
    dispatch(action)
  }
}

export function setIsCelsDegrees(isCelsDegrees) {
  return (dispatch) => {
    const action = {
      type: 'SET_IS_CELS_DEGREES',
      isCelsDegrees,
    }
    dispatch(action)
  }
}
