import React, { useEffect, useState } from 'react';
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
import { geSongById } from '../../api/getById';
import SongInfoForm from '../../components/SongInfoForm/SongInfoForm';




 const Edit: React.FC<{songsList:Song[],editSong:Function}> = (props) => {
 
    const { id } = useParams();
    
    const getSongToEdit=props.songsList.find(song => song.id === id)||new Song('','','','CLASSICAL',0,0);
    const [editId, setEditId]=useState(new Song('','','','CLASSICAL',0,0))
    let data:Song|string|null=null
    useEffect(()=>{
      debugger
        const func=async() =>{
         data= await geSongById(id||'')
        if(typeof data !=='string' )
            setEditId(data)
      }
      func()
  
    }
    ,[])
    //WHAT IS THE MORE CURRECT WAY TO GET THE ELEMENT TO EDIT FROM REDUX OR FROM SERVER ?

    const validationSchema = Yup.object({
        title:
            Yup.string()
                .required('genre is required'),
        length: Yup
            .number()
            .min(2, 'length should be of minimum 2 ')
            .required('length is required'),
    });


    //getSongToEdit.genre=Genre[getSongToEdit.genre]

    const initialValues: Song =getSongToEdit//editId// getSongToEdit;
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
    const genreTypes = ['CLASSICAL', 'POP', 'RAP', 'ROCK']
    //const genreTypes = [1, 2, 3, 4]
    console.log(formik.initialValues.genre)
    // if (data){
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
          id="genre"
          name="genre"
          label="genre"
          select
          
          value={formik.values.genre}
          defaultValue=""
          onChange={formik.handleChange}
          error={formik.touched.genre && Boolean(formik.errors.genre)}
          helperText={formik.touched.genre && formik.errors.genre}
        >
            {
          genreTypes.map((option:string,index:number) => (
        
            <MenuItem key={option+index} value={option}>
              {option}
            </MenuItem>
          ))}
          {/* {
          genreTypes.map((option:Genre,index:number) => (
        
            <MenuItem key={Genre[option]+index} value={Genre[option]}>
              {Genre[option]}
            </MenuItem>
          ))} */}
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
  // }
  // else return <><h1>no song yet...</h1></>
    
}

 

  
 

export  default Edit













