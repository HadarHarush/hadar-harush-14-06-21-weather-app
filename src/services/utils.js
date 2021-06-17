//T(c) === (T(f) - 32) / 1.8
//T(f) === 1.8T(c) + 32

export const daysInWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const fromFerToCelc = (ferTemp) => {
  return (ferTemp - 32) / 1.8
}
export const fromCelcToFer = (celcTemp) => {
  return 1.8 * celcTemp + 32
}
export const getWeatherIcon = (iconNumber) => {
  return iconNumber < 10
    ? `https://developer.accuweather.com/sites/default/files/0${iconNumber}-s.png`
    : `https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`
}
