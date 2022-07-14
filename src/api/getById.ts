import axios from 'axios';

import { Song } from '../Song'

export async function getSongById(id: string):Promise<Song|string> {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.get<Song>(
            'http://localhost:8989/Songs/' + id,
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


