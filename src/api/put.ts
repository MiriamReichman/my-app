import axios from 'axios';
import {Song} from '../Song';
export async function updateSong(song:Song,id:string){
  try {
    // 👇️ const data: UpdateUserResponse
    const { data } = await axios.put<Song>(
      'http://localhost:8989/Songs/'+id,
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

