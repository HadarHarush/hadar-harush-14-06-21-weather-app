import { useSelector } from 'react-redux'

import './ForecastsList.scss'
import { ForecastPreview } from '../ForecastPreview'

export const ForecastsList = (props) => {
  const city = useSelector(({ cityReducer }) => cityReducer.city)

  return (
    <ul className='forecasts-list clean-list center-childs'>
      {!city?.forecasts?.DailyForecasts ? (
        <p>Loading...</p>
      ) : (
        city.forecasts.DailyForecasts.map((currForecast) => (
          <ForecastPreview key={currForecast.Date} forecast={currForecast} />
        ))
      )}
    </ul>
  )
}
