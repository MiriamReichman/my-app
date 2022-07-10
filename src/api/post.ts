import axios from 'axios';
import { Song,AddSong } from '../Song';



export async function createSong(song:AddSong):Promise<Song|string> {
  try {
    // 👇️ const data: CreateUserResponse
    const { data } = await axios.post<Song>(
      'http://localhost:8989/Songs',
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


