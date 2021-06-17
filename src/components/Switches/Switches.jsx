import { useDispatch, useSelector } from 'react-redux'
import { setIsCelsDegrees, setIsDark } from '../../store/actions/uiActions'
import { IOSSwitch } from '../../components/IOSSwitch'
import Card from '@material-ui/core/Card'

import './Switches.scss'

export const Switches = (props) => {
  const { isDark, isCelsDegrees } = useSelector(({ uiReducer }) => uiReducer)
  const dispatch = useDispatch()

  return (
    <Card className='switches flex column'>
      <IOSSwitch
        checked={isDark}
        onChange={() => dispatch(setIsDark(!isDark))}
        label='Dark-Mode'
      />
      <IOSSwitch
        checked={isCelsDegrees}
        onChange={() => dispatch(setIsCelsDegrees(!isCelsDegrees))}
        label='Celsius'
      />
    </Card>
  )
}
