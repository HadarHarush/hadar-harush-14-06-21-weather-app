import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useHistory, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import { useDispatch, useSelector } from 'react-redux'
import './AppHeader.scss'
import logoImage from '../../assets/img/weather.png'
import { Switches } from '../Switches/Switches'

const routesMap = ['/', '/favorites']

export const AppHeader = () => {
  const history = useHistory()
  const location = useLocation()
  const [currRouteIdx, setCurrRouteIdx] = React.useState(0)

  useEffect(() => {
    if (location.pathname === '/favorites') {
      setCurrRouteIdx(
        routesMap.findIndex((currRoute) => currRoute === '/favorites')
      )
    } else {
      setCurrRouteIdx(routesMap.findIndex((currRoute) => currRoute === '/'))
    }
  }, [location.pathname])

  return (
    <>
      <AppBar position='fixed' className='app-header'>
        <div className='main-container flex align-center space-between'>
          <button
            className='logo-button center-childs'
            onClick={() => history.push('/')}
          >
            <img src={logoImage} alt='' />
            <Typography variant='h6' color='initial'>
              Weather-App
            </Typography>
          </button>
          <Tabs value={currRouteIdx} aria-label='simple tabs example'>
            <Tab
              label='Home'
              onClick={() => {
                history.push('/')
                setCurrRouteIdx(
                  routesMap.findIndex((currRoute) => currRoute === '/')
                )
              }}
            />
            <Tab
              label='Favorites'
              onClick={() => {
                history.push('/favorites')
                setCurrRouteIdx(
                  routesMap.findIndex((currRoute) => currRoute === '/favorites')
                )
              }}
            />
          </Tabs>
        </div>
      </AppBar>
      <div className='main-container'>
        <Switches />
      </div>
    </>
  )
}
