
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Genre, Song, AddSong } from "../Song";

import { getSongs } from '../api/getSongs'
import { createSong } from '../api/post';
import { geSongsByArtist } from "../api/getAllByArtist";
import { deleteSong } from "../api/delete";

import { updateSong } from "../api/put";
import { AppDispatch } from "./Store";
export interface SongsState {
    songs: Song[]
}

const initialState: SongsState = {

    songs: []

}
const songsSlice = createSlice({
    initialState,
    name: "songs",
    reducers: {
        receivedSongsRedux(state, action: PayloadAction<Song[]>) {

            state.songs = action.payload
        },
        addSongRedux(state, action: PayloadAction<Song>) {

            const song = action.payload;
            state.songs.push(song);

        },
        deleteSongRedux(state, action: PayloadAction<string>) {

            const id = action.payload;
            state.songs = state.songs.filter((song) => {
                return song.id !== id

            })
           

        },
        editSongRedux(state, action: PayloadAction<Song>) {
            const songUpdated = action.payload;
            const songToReplace=state.songs.findIndex((song) => { return song.id === songUpdated.id });
            if(songToReplace)
                state.songs[songToReplace]=songUpdated
          
        }
    },
})


export const getSongsThunk = () => {
    return async (dispatch: AppDispatch) => {
        const songs: Song[] | string = await getSongs();
        if (songs !== null)
            if (typeof songs !== "string")
                dispatch(receivedSongsRedux(songs))
            else alert(songs)

    }
}

export const addSongsThunk = (song: AddSong) => {
    return async (dispatch: AppDispatch) => {
        const Newsong: Song | string = await createSong(song);
        if (Newsong !== null)
            if (typeof Newsong !== "string")
                dispatch(addSongRedux(Newsong))
            else alert(Newsong)

    }
}

export const getSongsByArtistThunk = (artist: string) => {

    return async (dispatch: AppDispatch) => {

        const songs: Song[] | string = await geSongsByArtist(artist)
        if (songs === null || songs.length === 0) {
            alert("no songs found for artist: " + artist)
            dispatch(getSongsThunk());
        }
        else if (typeof songs !== "string")
            dispatch(receivedSongsRedux(songs))

    }
}

export const deleteSongThunk = (id: string) => {

    return async (dispatch: AppDispatch) => {
        const data: string = await deleteSong(id)
        alert(data);
        if (data === "deleted document")
            dispatch(deleteSongRedux(id))

    }
}


export const editSongThunk = (song: Song, id: string) => {

    return async (dispatch: AppDispatch) => {
        const data: Song | string = await updateSong(song, id)

        if (typeof data !== 'string') {

            dispatch(editSongRedux(song))
        }
        else alert(data);

    }
}
export type addSongtype = typeof addSongRedux;
export const { receivedSongsRedux, addSongRedux, editSongRedux, deleteSongRedux } = songsSlice.actions;
export default songsSlice.reducer;