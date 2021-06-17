import { eventBusService } from '../../services/eventBusService'
import { localStorageService } from '../../services/localStorageService'

// Thunk - Action Dispatcher
export function setFavorites(favorites) {
  return (dispatch) => {
    localStorageService.setItem('favoriteCities', favorites)
    const action = {
      type: 'SET_FAVORITES',
      favorites,
    }
    dispatch(action)
  }
}

export function addFavorite(favorite) {
  return (dispatch, getState) => {
    const action = {
      type: 'ADD_FAVORITE',
      favorite,
    }
    dispatch(action)
    localStorageService.setItem(
      'favoriteCities',
      getState().favoriteCitiesReducer.favoriteCities
    )
    eventBusService.emit('notif', {
      type: 'success',
      txt: `Added ${favorite.details.LocalizedName} to favorites`,
    })
  }
}

export function removeFavorite(cityKey) {
  return (dispatch, getState) => {
    console.log('removing from action: ', cityKey)
    const action = {
      type: 'REMOVE_FAVORITE',
      cityKey,
    }
    dispatch(action)
    localStorageService.setItem(
      'favoriteCities',
      getState().favoriteCitiesReducer.favoriteCities
    )
    eventBusService.emit('notif', {
      type: 'success',
      txt: `Removed from favorites`,
    })
  }
}
