
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) =>({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    maxWidth: '100%',
    background: '#ffffff',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button1: {
    background:"#03ad23",
    color:"#ffffff",
  },
  button2: {
    background:"#d19004",
    color:"#ffffff",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  media: {
    height: 150,
  },
}));

