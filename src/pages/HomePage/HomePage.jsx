import { useSelector } from 'react-redux'

import './HomePage.scss'
import { SearchBox } from '../../components/SearchBox'
import { ForecastsList } from '../../components/ForecastsList/ForecastsList'
import { ToggleFavoriteButton } from '../../components/ToggleFavoriteButton/ToggleFavoriteButton'
import { Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import ErrorIcon from '@material-ui/icons/ErrorOutlined'
import { MessageBox } from '../../components/MessageBox/MessageBox'

export const HomePage = (props) => {
  const { city } = useSelector(({ cityReducer }) => cityReducer)
  const { cityStatus, isCelsDegrees } = useSelector(
    ({ uiReducer }) => uiReducer
  )

  const getUiTemp = () => {
    const temp =
      city.weather[0].Temperature[isCelsDegrees ? 'Metric' : 'Imperial'].Value

    return `${Math.round(temp * 10) / 10}'${isCelsDegrees ? 'C' : 'F'}`
  }

  return (
    <div className='home-page flex column align-center'>
      <SearchBox />
      {cityStatus === 'empty' && (
        <MessageBox
          text="Search for any desired city, and get it's weather details!"
          Icon={<SearchIcon />}
        />
      )}
      {cityStatus === 'error' && (
        <MessageBox
          text='There was an Error while trying to search for your city. Please refresh the page and try again...'
          Icon={<ErrorIcon color='error' />}
          color='error'
        />
      )}
      {cityStatus === 'fulfilled' && (
        <div className='city-details'>
          <div className='city-details-bar flex space-between align-center'>
            <div>
              <Typography variant='h6'>{city.details.LocalizedName}</Typography>
              <Typography variant='body1'>{getUiTemp()}</Typography>
            </div>
            <div>
              <ToggleFavoriteButton cityKey={city.details.Key} city={city} />
            </div>
          </div>
          <Typography className='city-title' variant='h2'>
            {city.weather[0].WeatherText}
          </Typography>
          <ForecastsList />
        </div>
      )}
      {cityStatus === 'loading' && <CircularProgress />}
    </div>
  )
}
