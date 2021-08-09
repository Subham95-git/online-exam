
import { makeStyles } from '@material-ui/core';
import schoolImage from '../../Resources/school.jpg';
export default makeStyles(theme => ({
    root: {
      display: 'flex',
     // backgroundImage: `url(${schoolImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '65%',
        
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(1),
        width: '100%',
       
      },
    },
    alert: {
      position: 'top',
    },
  }));