import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Song } from '../Song';
import './Row.css'
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hook';
import {deleteSongAction} from '../store/songSlice'
const Row: React.FC<{ item: Song }> = (props) => {

  
const dispatch = useAppDispatch();
const navigate = useNavigate();
  const handelEdit = () => {
    navigate(`/songs/edit/${props.item.id}`)
  
  }
  const deletHendler = (): void => {
   dispatch(deleteSongAction(props.item.id));

  }

  return (
    <div className='row'>
      <DeleteIcon onClick={deletHendler}/>

      <EditIcon onClick={handelEdit} />
      {props.item.title} | {props.item.artist}|{props.item.price}$
    </div>
  )
}


export default Row
