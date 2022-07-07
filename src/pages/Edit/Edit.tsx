import React, { useEffect } from 'react';

import BackButton from '../../components/backButton/BackButton';
import SongInfoForm from '../../components/SongInfoForm/SongInfoForm';
import { Gener, Song } from '../../Song';
import { useParams } from 'react-router-dom';
import { editSong, editSongThunk } from '../../store/songSlice'

import { useAppSelector, useAppDispatch } from '../../store/hook';
import { string } from 'yup';
import { geSongById } from '../../api/getById';


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




 const Edit: React.FC = (props) => {
    const dispatch = useAppDispatch(); 
    const { id } = useParams();
    const songsList = useAppSelector(state => state.songs.songs)  
    let getSongToEdit: Song=new Song('', '', '', Gener.CLASSICAL, 0, 0);
    useEffect(() => {
      const getSongById = (id: string): Song => {
        let songToReturn: Song = new Song(id, '', '', Gener.CLASSICAL, 0, 0);
        geSongById(id).then((song) => {
            if (song !== null && typeof song !== "string") {
                songToReturn = song;
            }
        });
        return songToReturn;
    }
   getSongToEdit= getSongById(id || '');
    }, [id])
    //------------
    const validationSchema = Yup.object({
        title:
            Yup.string()
                .required('gener is required'),
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
            //console.log('will soon use dispatch with this action name:',props.onsubmit)
            console.log({ values, setSubmitting });
            dispatch(editSongThunk(values,id||''));

            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);

        }
    });
    const generTypes = [Gener.CLASSICAL, Gener.POP, Gener.RAP, Gener.ROCK]
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
            id="Gener"
            select
            label="Gener"
            value={formik.values.gener}
            onSelect={formik.handleChange}
            error={formik.touched.gener && Boolean(formik.errors.gener)}
            helperText={formik.touched.gener && formik.errors.gener}
          >
            {generTypes.map((option) => (
              <MenuItem key={option} value={option}>
                {option.valueOf()}
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













