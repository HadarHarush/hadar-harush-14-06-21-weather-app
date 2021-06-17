import { useSelector } from 'react-redux'
import './FavoritesList.scss'
import { FavoritePreview } from '../FavoritePreview/FavoritePreview'
import { MessageBox } from '../MessageBox/MessageBox'
import ErrorIcon from '@material-ui/icons/ErrorOutlined'

export const FavoritesList = (props) => {
  const { favoriteCities } = useSelector(
    ({ favoriteCitiesReducer }) => favoriteCitiesReducer
  )

  const EmptyMessage = (
    <MessageBox
      text={
        "It's looks like your favorites list is empty... Add cities to your favorites in the home page"
      }
      Icon={<ErrorIcon />}
    />
  )

  if (!favoriteCities?.length) return EmptyMessage
  return (
    <ul className='favorites-list center-childs'>
      {favoriteCities.map((currFav) => (
        <FavoritePreview key={currFav.details.Key} favorite={currFav} />
      ))}
    </ul>
  )
}
