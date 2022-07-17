import React, { useEffect, useState } from 'react';
import BackButton from '../../components/backButton/BackButton';
import { Genre, Song } from '../../moudel/Song';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card, CardMedia, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import {
  FormikHelpers,
  useFormik
  //FieldProps,
} from 'formik';
import { getSongById } from '../../api/getById';


import useStyles from './Edit.style'


const Edit: React.FC<{ songsList: Song[], editSong: Function }> = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  //from redux
  // const getSongToEdit=props.songsList.find(song => song.id === id)||new Song('','','','CLASSICAL',0,0);
  const [getSongToEdit, setGetSongToEdit] = useState<Song>({id:'', title: '', artist: '',genre: 'CLASSICAL',length: 0, price:0})
  let data: Song | string | null = null
  useEffect(() => {

    const func = async () => {
      data = await getSongById(id || '')

      if (typeof data !== 'string')
        setGetSongToEdit(data)

    }
    func();

  }
    , [])


  const validationSchema = Yup.object({
    title:
      Yup.string()
        .required('title is required'),
    length: Yup
      .number()
      .min(2, 'length should be of minimum 2 ')
      .required('length is required'),
  });



  const initialValues: Song = getSongToEdit;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: Song, { setSubmitting }: FormikHelpers<Song>) => {

      console.log({ values, setSubmitting });
      props.editSong(values, id)
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);

    }
  });
  const genreTypes = ['CLASSICAL', 'POP', 'RAP', 'ROCK']

  console.log(formik.initialValues.genre)

  return <>
    <h1 className={classes.header}>Edit Song</h1>

    <Card className={classes.Card} >

      <CardMedia
        className={classes.CardMidea}
        component="img"
        height="140"
        image="https://cloud.githubusercontent.com/assets/3484527/19622568/9c972d44-987a-11e6-9dcc-93d496ef408f.png"
        alt="green iguana"
      />

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
            genreTypes.map((option: string, index: number) => (

              <MenuItem key={option + index} value={option}>
                {option}
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

    </Card>
    <BackButton />

    <BackButton />


  </>


}






export default Edit













