const STORAGE_KEY = 'weather-app'

initLocalStorage()

const setItem = (key, val) => {
  let stringifiedStorage = localStorage.getItem(STORAGE_KEY)
  if (!stringifiedStorage) {
    return null
  }

  const parsedStorage = JSON.parse(stringifiedStorage)

  const stringifiedNewStorage = JSON.stringify({ ...parsedStorage, [key]: val })

  localStorage.setItem(STORAGE_KEY, stringifiedNewStorage)
}

const getItem = (key) => {
  const stringifiedStorage = localStorage.getItem(STORAGE_KEY)
  if (!stringifiedStorage) {
    return null
  }

  const parsedStorage = JSON.parse(stringifiedStorage)
  return parsedStorage[key] ? parsedStorage[key] : null
}

function initLocalStorage() {
  let weatherStorage = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
  if (!weatherStorage) {
    weatherStorage = {
      favoriteCities: [],
      cachedGets: [],
    }
  } else {
    if (!weatherStorage.cachedGets) {
      weatherStorage = {
        ...weatherStorage,
        cachedGets: [],
      }
    }
    if (!weatherStorage.favoriteCities) {
      weatherStorage = {
        ...weatherStorage,
        favoriteCities: [],
      }
    }
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(weatherStorage))
}

export const localStorageService = {
  setItem,
  getItem,
}
