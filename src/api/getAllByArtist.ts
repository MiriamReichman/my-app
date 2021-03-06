import axios from 'axios';

import { Song } from '../moudel/Song'
import {  GET_SONGS_URL } from '../config';

export async function geSongsByArtist(artist: string):Promise<Song[]|string> {
    try {
      
        const { data, status,  } = await axios.get<Song[]>(
            GET_SONGS_URL+'specificArtistSongs/' + artist,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

       if(status === 200)
        return data;
        else throw new Error('status !200  ')
    } catch (error) {
        if (axios.isAxiosError(error)) {
        
            return error.message;
        } else {
       
            return 'An unexpected error occurred';
        }
    }
}


