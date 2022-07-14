import axios from 'axios';
import { url } from '../config';
import {Song} from '../moudel/Song';
export async function updateSong(song:Song,id:string):Promise<Song|string>{
  try {
    // 👇️ const data: UpdateUserResponse
    const { data } = await axios.put<Song>(
      url+id,
    song,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

