const INITIAL_STATE = {
  cityStatus: 'empty',
  isDark: false,
  isCelsDegrees: true,
}

export function uiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CITY_STATUS':
      return {
        ...state,
        cityStatus: action.cityStatus,
      }
    case 'SET_IS_DARK':
      return {
        ...state,
        isDark: action.isDark,
      }
    case 'SET_IS_CELS_DEGREES':
      return {
        ...state,
        isCelsDegrees: action.isCelsDegrees,
      }
    default:
      return state
  }
}
