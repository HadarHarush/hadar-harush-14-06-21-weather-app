const INITIAL_STATE = {
  city: null,
}

export function cityReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        city: action.city,
      }
    default:
      return state
  }
}
