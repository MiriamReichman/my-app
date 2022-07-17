
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import useStyles from './BackButton.styile'

const BackButton: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handalArrowClick = () => {
    navigate('/')
  }
  return <>
    <ArrowCircleLeftIcon onClick={handalArrowClick} className={classes.root} />
  </>;
}




export default BackButton;