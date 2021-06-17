import './assets/scss/main.scss'
// import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route, HashRouter as Router } from 'react-router-dom'

import { AppHeader } from './components/AppHeader/AppHeader'
import { HomePage } from './pages/HomePage/HomePage'
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage'
import { AppNotification } from './components/AppNotification'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadFullCity } from './store/actions/cityActions'
import { accuWeatherService } from './services/accuWeatherService'
import { eventBusService } from './services/eventBusService'
import Paper from '@material-ui/core/Paper'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

function App() {
  const dispatch = useDispatch()
  const { isDark } = useSelector(({ uiReducer }) => uiReducer)

  const searchByLocation = async (lat, lng) => {
    try {
      const cityDetails = await accuWeatherService.getByLocation(lat, lng)
      dispatch(loadFullCity(cityDetails))
    } catch (error) {
      eventBusService.emit('notif', {
        type: 'error',
        txt: `Couldn't load city of your current location. Check your internet connection, and make sure that you did'nt exceeded the daily weather requests`,
      })
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        searchByLocation(latitude, longitude),
      () => {
        eventBusService.emit('notif', {
          type: 'error',
          txt: `Couldn't load city by current location because permission denied`,
        })
      }
    )
  }, [])

  const theme = createMuiTheme({
    palette: {
      type: isDark ? 'dark' : 'light',
    },
  })

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Paper className='app-paper'>
          <div className='App'>
            <AppHeader />
            <AppNotification />
            <main className='main-container page-container'>
              <Switch>
                <Route component={FavoritesPage} path='/favorites' />
                <Route component={HomePage} path='' />
              </Switch>
            </main>
          </div>
        </Paper>
      </ThemeProvider>
    </Router>
  )
}

export default App
