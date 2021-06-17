import './FavoritesPage.scss'

import { FavoritesList } from '../../components/FavoritesList/FavoritesList'

export const FavoritesPage = (props) => {
  return (
    <section className='favorites-page flex justify-center'>
      <FavoritesList />
    </section>
  )
}
