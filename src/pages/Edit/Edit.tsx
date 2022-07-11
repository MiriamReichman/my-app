import React, { useEffect } from 'react';
import BackButton from '../../components/backButton/BackButton';
import {Genre, Song } from '../../Song';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field, ErrorMessage, useFormik
    //FieldProps,
} from 'formik';




 const Edit: React.FC<{songsList:Song[],editSong:Function}> = (props) => {
 
    const { id } = useParams();
    
    const getSongToEdit=props.songsList.find(song => song.id === id)||new Song('','','',2,0,0);
    //WHAT IS THE MORE CURRECT WAY TO GET THE ELEMENT TO EDIT FROM REDUX OR FROM SERVER ?
    //---------
  //   let getSongToEdit: Song=new Song('', '', '', Genre.CLASSICAL, 0, 0);
  //   useEffect(() => {
  //     const getSongById = (id: string): Song => {
  //       let songToReturn: Song = new Song(id, '', '', Genre.CLASSICAL, 0, 0);
  //       geSongById(id).then((song) => {
  //           if (song !== null && typeof song !== "string") {
  //               songToReturn = song;
  //           }
  //       });
  //       return songToReturn;
  //   }
  //  getSongToEdit= getSongById(id || '');
  //   }, [id])
    //------------
    const validationSchema = Yup.object({
        title:
            Yup.string()
                .required('genre is required'),
        length: Yup
            .number()
            .min(2, 'length should be of minimum 2 ')
            .required('length is required'),
    });


    const initialValues: Song = getSongToEdit;
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values: Song, { setSubmitting }: FormikHelpers<Song>) => {
            debugger
            console.log({ values, setSubmitting });
            props.editSong(values,id)
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);

        }
    });
    const genreTypes = [Genre.CLASSICAL, Genre.POP, Genre.RAP, Genre.ROCK]
    console.log(Genre[formik.initialValues.genre])
    return <>
        <h1>Edit Song</h1>
        {/* <SongInfoForm song={getSongToEdit} buttonDescription={"Edit"} action={editSong} /> */}
        <form onSubmit={formik.handleSubmit} >
          <TextField id="title"

            sx={{ backgroundColor: 'white', borderRadius: 2, margin: 2 }}
            name="title"
            label="title"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title} />
          <br></br>
          <TextField
            sx={{ backgroundColor: 'white', borderRadius: 2, margin: 2 }}
            id="artist"
            name="artist"
            label="artist"
            value={formik.values.artist}
            onChange={formik.handleChange}
            error={formik.touched.artist && Boolean(formik.errors.artist)}
            helperText={formik.touched.artist && formik.errors.artist}
          />
          <br></br>
          <TextField sx={{ m: 1, minWidth: 220, backgroundColor: 'white', borderRadius: 2, margin: 2 }}
            id="Genre"
            select
            label="Genre"
            value={Genre[formik.values.genre]}
            onSelect={formik.handleChange}
            error={formik.touched.genre && Boolean(formik.errors.genre)}
            helperText={formik.touched.genre && formik.errors.genre}
          >
            {genreTypes.map((option:Genre,index:number) => (
          
              <MenuItem key={option+index} value={Genre[option]}>
                {Genre[option]}
              </MenuItem>
            ))}
          </TextField>

          <br></br>
          <TextField
            sx={{ backgroundColor: 'white', borderRadius: 2, margin: 2 }}
            id="length"
            name="length"
            label="length"
            type="number"
            value={formik.values.length}
            onChange={formik.handleChange}
            error={formik.touched.length && Boolean(formik.errors.length)}
            helperText={formik.touched.length && formik.errors.length}
          />
          <br></br>
          <TextField
            sx={{ backgroundColor: 'white', borderRadius: 2, margin: 2 }}
            id="price"
            name="price"
            label="price"
            type="number"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
          <br></br>
          <Button color="primary" variant="contained" type="submit">
           Edit </Button>
        </form>
 

      <BackButton />

        <BackButton />
    </>
    
}




export  default Edit













