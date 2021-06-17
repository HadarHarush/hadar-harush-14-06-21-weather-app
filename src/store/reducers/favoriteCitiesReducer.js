import { localStorageService } from '../../services/localStorageService'

const INITIAL_STATE = {
  favoriteCities: localStorageService.getItem('favoriteCities') || [],
}

export function favoriteCitiesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_FAVORITES':
      return {
        ...state,
        favoriteCities: action.favorites,
      }
    case 'ADD_FAVORITE':
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.favorite],
      }
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favoriteCities: state.favoriteCities.filter(
          (currFavorite) => currFavorite.details.Key !== action.cityKey
        ),
      }
    case 'UPDATE_FAVORITE':
      const { updatedFavorite } = action
      return {
        ...state,
        favoriteCities: state.favoriteCities.map((currFavorite) =>
          currFavorite._id === updatedFavorite._id
            ? updatedFavorite
            : currFavorite
        ),
      }
    default:
      return state
  }
}
