import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    header:{
        color: 'white',
    },
  CardMidea: {
    maxWidth: 400,
    height: 550,
    top: 0,
    left: 0,
    backgroundColor: 'yellow',
    flex: 4,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 40
  },
  Card: {
    maxWidth: 605,
    margin: 'auto',
    minHeight: 550,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '3px 3px 20px rgba(0, 0, 0, 0.1)',
  }
});
export default useStyles;