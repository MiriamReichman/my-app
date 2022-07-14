import axios from 'axios';

import { Song } from '../moudel/Song'
import { url } from '../config';

export async function geSongsByArtist(artist: string):Promise<Song[]|string> {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.get<Song[]>(
            url+'specificArtistSongs/' + artist,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        console.log(JSON.stringify(data, null, 4));

        // 👇️ "response status is: 200"
        console.log('response status is: ', status);
       
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}


