import axios from 'axios';



export async function deleteSong(id: string):Promise<string> {
  try {
    // 👇️ const data: UpdateUserResponse
    const { data, status } = await axios.delete<string>(
      'http://localhost:8989/Songs/'+id,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log('response is: ', data);

    // 👇️ response status is: 204
    console.log('response status is: ', status);

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


