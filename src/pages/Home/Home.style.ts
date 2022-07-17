import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    Button: {
        borderBlockColor: 'white',
        color: 'white',
        height: 100,
        width: 100,
        padding: '0 30px',
        position: 'absolute',
        margin: 'auto',
    },
    Home:{
        textAlign: 'center',
    },HomeHeder:{
        color: 'white',
        flex: 1 
      },heder:{
        display: 'flex',
        flexWrap:'wrap' ,
        flex: 2
          },Search:{
            display: 'flex',
            flexDirection:'row',
            marginTop:30
          }

});
export default useStyles;