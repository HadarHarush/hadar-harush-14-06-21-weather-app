import { httpService } from './httpService'

const ACCUWEATHER_BASE_URL = 'https://dataservice.accuweather.com'
const SECONDARY_API_KEY = 'R4ettAiKfMJQGCQOZK5DZL7BzAITmfik'
const API_KEY = '3EYPCFS44b60SEabFAOgpaAXxKeyjFmG'

const getAutoCompletes = async (text) => {
  let endpoint = `${ACCUWEATHER_BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${text}`
  try {
    return await httpService.get(endpoint)
  } catch (error) {
    try {
      endpoint = endpoint.replace(API_KEY, SECONDARY_API_KEY)
      return await httpService.get(endpoint)
    } catch (error) {
      throw error
    }
  }
}

const getWeather = async (key) => {
  let endpoint = `${ACCUWEATHER_BASE_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`
  try {
    return await httpService.get(endpoint)
  } catch (error) {
    try {
      endpoint = endpoint.replace(API_KEY, SECONDARY_API_KEY)
      return await httpService.get(endpoint)
    } catch (error) {
      throw error
    }
  }
}

const getForecasts = async (key) => {
  let endpoint = `${ACCUWEATHER_BASE_URL}/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`
  try {
    return await httpService.get(endpoint)
  } catch (error) {
    try {
      endpoint = endpoint.replace(API_KEY, SECONDARY_API_KEY)
      return await httpService.get(endpoint)
    } catch (error) {
      throw error
    }
  }
}

const getByLocation = async (lat, lng) => {
  let endpoint = `${ACCUWEATHER_BASE_URL}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${lat}%2C${lng}`
  try {
    return await httpService.get(endpoint)
  } catch (error) {
    try {
      console.log('entering the try-catch inside the big catch')
      endpoint = endpoint.replace(API_KEY, SECONDARY_API_KEY)
      return httpService.get(endpoint)
    } catch (error) {
      throw error
    }
  }
}

export const accuWeatherService = {
  getAutoCompletes,
  getWeather,
  getForecasts,
  getByLocation,
}
