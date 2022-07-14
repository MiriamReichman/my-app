import axios from 'axios';
import { url } from '../config';
import { Song,AddSong } from '../moudel/Song';



export async function createSong(song:AddSong):Promise<Song|string> {
  try {
   
    const { data } = await axios.post<Song>(
      url,
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
      alert('error message: '+ error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}


