import Card from '@material-ui/core/Card'
import { Typography } from '@material-ui/core'
import './FavoritePreview.scss'
import {
  fromFerToCelc,
  fromCelcToFer,
  getWeatherIcon,
  daysInWeek,
} from '../../services/utils'
import { ToggleFavoriteButton } from '../ToggleFavoriteButton/ToggleFavoriteButton'
import { useSelector } from 'react-redux'

export const FavoritePreview = ({ favorite: { weather, details } }) => {
  const { isCelsDegrees } = useSelector(({ uiReducer }) => uiReducer)
  const day = daysInWeek[new Date(weather[0].LocalObservationDateTime).getDay()]

  const getUiTemp = () => {
    const temp =
      weather[0].Temperature[isCelsDegrees ? 'Metric' : 'Imperial'].Value

    return `${Math.round(temp * 10) / 10}'${isCelsDegrees ? 'C' : 'F'}`
  }

  return (
    <Card className='favorite-preview flex column align-center'>
      <Typography className='title' align='center' variant='body1'>
        {details.LocalizedName}
      </Typography>
      <Typography align='center' variant='body1'>
        {day.slice(0, 3)}
      </Typography>
      <Typography align='center' variant='body1'>
        {getUiTemp()}
      </Typography>
      <img src={getWeatherIcon(weather[0].WeatherIcon)} alt='' />
      <ToggleFavoriteButton cityKey={details.Key} />
    </Card>
  )
}
