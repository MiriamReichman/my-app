import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Song } from '../../../moudel/Song';
import './Row.css'
import { useNavigate } from 'react-router-dom';

const Row: React.FC<{ item: Song,deleteSong:Function }> = (props) => {


const navigate = useNavigate();
  const handelEdit = ():void => {
    navigate(`/songs/edit/${props.item.id}`)
  
  }
  const deletHendler = (): void => {
    props.deleteSong(props.item.id)


  }

  return (
    <div className='row'>
      <DeleteIcon onClick={deletHendler} />

      <EditIcon onClick={handelEdit} />
      <span style={{flexGrow: 1,flexShrink: 0,alignSelf: 'center'}}>| {props.item.title}</span>
      <span style={{flexGrow: 2 ,flexShrink: 0,alignSelf: 'center'}}>| {props.item.artist}</span>
      <span style={{flexGrow: 1,flexShrink: 0,alignSelf: 'center'}}>| {props.item.price}$</span>
      
    </div>
  )
}


export default Row
