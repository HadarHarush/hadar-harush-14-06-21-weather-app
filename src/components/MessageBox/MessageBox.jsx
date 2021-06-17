import { Typography } from '@material-ui/core'
import './MessageBox.scss'

export const MessageBox = ({ text, Icon, color = 'textPrimary' }) => {
  return (
    <div className='message-box flex column align-center'>
      <Typography
        align='center'
        variant='h6'
        className='message-box-text'
        color={color}
      >
        {text}
      </Typography>
      {Icon}
    </div>
  )
}
