
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Genre, Song, AddSong } from "../Song";

import { geSongs } from '../api/apiCalles'
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
        receivedSongs(state, action: PayloadAction<Song[]>) {

            state.songs = action.payload
            console.log("current song receivedSongs", (state.songs))

        },
        addSong(state, action: PayloadAction<Song>) {

            const song = action.payload;
            state.songs.push(song);

            console.log("current song addSong", (state.songs))
        },
        deleteSongRedux(state, action: PayloadAction<string>) {

            const id = action.payload;
            state.songs = state.songs.filter((song) => {
                return song.id !== id

            })
            console.log("current song deleteSongRedux", (state.songs))

        },
        editSong(state, action: PayloadAction<Song>) {

            const songUpdated = action.payload;
            state.songs = state.songs.filter((song) => { return song.id !== songUpdated.id });
            state.songs.push(songUpdated);
            console.log("current song editSong", (state.songs))
        }
    },
})


export const getSongsAction = () => {
    return async (dispatch: AppDispatch) => {
        const songs: Song[] | string = await geSongs();
        if (songs !== null)
            if (typeof songs !== "string")
                dispatch(receivedSongs(songs))
            else alert(songs)

    }
}

export const addSongsAction = (song: AddSong) => {
    return async (dispatch: AppDispatch) => {
        const Newsong: Song | string = await createSong(song);
        if (Newsong !== null)
            if (typeof Newsong !== "string")
                dispatch(addSong(Newsong))
            else alert(Newsong)

    }
}

export const getSongsByArtist = (artist: string) => {

    return async (dispatch: AppDispatch) => {

        const songs: Song[] | string = await geSongsByArtist(artist)
        if (songs === null || songs.length === 0) {
            alert("no songs found for artist: " + artist)
            //find out if this is nessery/menning do we need to re render home page to show all songs 
            //or is the last song search okay?
            dispatch(getSongsAction());
        }
        else if (typeof songs !== "string")
            dispatch(receivedSongs(songs))

    }
}

export const deleteSongAction = (id: string) => {

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

            dispatch(editSong(song))
        }
        else alert(data);

    }
}
export type addSongtype = typeof addSong;
export const { receivedSongs, addSong, editSong, deleteSongRedux } = songsSlice.actions;
export default songsSlice.reducer;