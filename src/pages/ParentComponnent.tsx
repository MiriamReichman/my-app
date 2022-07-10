import Home  from './Home/Home'
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { addSongsAction, deleteSongAction, editSongThunk, getSongsAction, getSongsByArtist } from "../store/songSlice";
import Add from './Add/Add';
import Edit from './Edit/Edit';
import { AddSong, Song } from '../Song';

export const ParentComponnent=()=> {
    const dispatch = useAppDispatch();
    const Songs:Song[]=useAppSelector(state => state.songs.songs)
    useEffect(() => {
        //get products from api
        dispatch(getSongsAction());
    }, [])
    
    const addNewSong = (newSong:AddSong) =>{
      dispatch(addSongsAction(newSong));

    }
    const editSong = (values:Song,id:string) =>{
      dispatch(editSongThunk(values,id||''));
    }
    const deleteSong = (id:string) =>{
      dispatch(deleteSongAction(id));
    }
    const SongsByArtist=(artist:string)=>{
      dispatch(getSongsByArtist(artist))
    }
  //  const [songs, setSongs] = useState(useAppSelector(state => state.songs.songs))
    return (
      <div>
        <Routes>
            <Route path="/" element={<Home songsList={Songs} searchArtist={SongsByArtist} deleteSong={deleteSong}/>} />
            <Route path="/songs">
              {/* <Route path="/songs" element={<p>display songs component </p>} /> */}
              <Route path="/songs/new" element={<Add addNewSong={addNewSong}/>}  />
              <Route path="/songs/edit/:id" element={<Edit songsList={Songs} editSong={editSong}/>}/>
            </Route>
          </Routes>
   
      </div>
    );
  }
 

  

  