import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-ui/core'
import FavIconEmpty from '@material-ui/icons/FavoriteBorderOutlined'
import FavIcon from '@material-ui/icons/Favorite'

import {
  addFavorite,
  removeFavorite,
} from '../../store/actions/favoriteCitiesActions'
import './ToggleFavoriteButton.scss'

export const ToggleFavoriteButton = ({ cityKey, city }) => {
  const { favoriteCities } = useSelector(
    ({ favoriteCitiesReducer }) => favoriteCitiesReducer
  )
  const dispatch = useDispatch()

  const relevantCity = city
    ? city
    : favoriteCities.find(({ details: { Key } }) => Key === cityKey)

  const isFavorite = favoriteCities.find(({ details: { Key } }) => {
    console.log('Key:', Key)
    console.log('cityKey:', cityKey)
    return Key === cityKey
  })

  const toggleFavorite = () => {
    if (!isFavorite) return dispatch(addFavorite(relevantCity))
    dispatch(removeFavorite(cityKey))
  }
  return (
    // <Button variant="contained" color="primary"></Button>
    <Button
      variant={isFavorite ? 'contained' : 'outlined'}
      startIcon={isFavorite ? <FavIcon /> : <FavIconEmpty />}
      color={'secondary'}
      className='toggle-favorite-button'
      onClick={toggleFavorite}
    >
      favorites
    </Button>
  )
}
