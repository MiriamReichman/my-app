import Home from './Home/Home'
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { getSongsThunk, addSongsThunk, getSongsByArtistThunk, deleteSongThunk, editSongThunk } from "../store/songSlice";
import Add from './Add/Add';
import Edit from './Edit/Edit';
import { AddSong, Song } from '../moudel/Song';

export const ParentComponnent = () => {
  const dispatch = useAppDispatch();
  const songs: Song[] = useAppSelector(state => state.songs.songs)
  useEffect(() => {
    dispatch(getSongsThunk());
  }, [])

  const addNewSong = (newSong: AddSong) => {
    dispatch(addSongsThunk(newSong));
  }
  const editSong = (newValuesForSong: Song, id: string) => {
    dispatch(editSongThunk(newValuesForSong, id || ''));
  }
  const deleteSong = (id: string) => {
    dispatch(deleteSongThunk(id));
  }
  const songsByArtist = (artist: string) => {
    dispatch(getSongsByArtistThunk(artist))
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home songsList={songs} searchArtist={songsByArtist} deleteSong={deleteSong} />} />
        <Route path="/songs">
          <Route path="/songs/new" element={<Add addNewSong={addNewSong} />} />
          <Route path="/songs/edit/:id" element={<Edit songsList={songs} editSong={editSong} />} />
        </Route>
      </Routes>
    </div>
  );
}




