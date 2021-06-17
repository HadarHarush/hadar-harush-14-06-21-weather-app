import { localStorageService } from './localStorageService'

const CACHED_GETS_STORAGE_KEY = 'cachedGets'

const SECONDARY_API_KEY = 'R4ettAiKfMJQGCQOZK5DZL7BzAITmfik'
const API_KEY = '3EYPCFS44b60SEabFAOgpaAXxKeyjFmG'

const getResponseFromStorage = (endpoint) => {
  const endpointWithMainAPI = endpoint.replace(SECONDARY_API_KEY, API_KEY)
  const endpointWithSecondaryAPI = endpoint.replace(API_KEY, SECONDARY_API_KEY)
  const cachedGetsInStorage = localStorageService.getItem(
    CACHED_GETS_STORAGE_KEY
  )

  const existingEndpointObj = cachedGetsInStorage.find(
    (currGetObj) =>
      currGetObj.endpoint === endpointWithMainAPI ||
      currGetObj.endpoint === endpointWithSecondaryAPI
  )

  return existingEndpointObj?.value ? existingEndpointObj?.value : null
}

const saveResponseInStorage = (endpoint, value) => {
  let lastCachedGetsStorageVal = localStorageService.getItem(
    CACHED_GETS_STORAGE_KEY
  )
  if (!lastCachedGetsStorageVal) {
    lastCachedGetsStorageVal = []
  }

  //keep the data fresh...
  lastCachedGetsStorageVal.filter(
    (currCachedGet) => currCachedGet.endpoint !== endpoint
  )

  const NewCachedGetsStorageVal = [
    { endpoint, value },
    ...lastCachedGetsStorageVal,
  ]

  localStorageService.setItem(CACHED_GETS_STORAGE_KEY, NewCachedGetsStorageVal)
}

const get = async (endpoint) => {
  try {
    const responseFromStorage = getResponseFromStorage(endpoint)
    if (responseFromStorage) return responseFromStorage

    const autoCompletes = await fetch(endpoint).then((response) =>
      response.json()
    )
    saveResponseInStorage(endpoint, autoCompletes)
    return autoCompletes
  } catch (error) {
    throw error
  }
}

export const httpService = {
  get,
}
