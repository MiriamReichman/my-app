import React from 'react'
import BackButton from '../../components/backButton/BackButton'
import { Song, Genre, AddSong } from '../../moudel/Song'


import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Card, CardMedia, MenuItem } from '@mui/material';
import {
  Formik, FormikHelpers, FormikProps, Form, Field, ErrorMessage, useFormik  //FieldProps,
} from 'formik';
import useStyles from './Add.styile';

const Add: React.FC<{ addNewSong: Function }> = (props) => {
  const song: AddSong = { title: '', artist: '', genre: 'RAP', length: 0, price: 0 }
  const classes = useStyles();
  const validationSchema = Yup.object({
    title:
      Yup.string()
        .required('genre is required'),
    length: Yup
      .number()
      .min(1, 'length should be of minimum 1')
      .required('length is required'),
  });


  const initialValues: AddSong = song;
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: AddSong, { setSubmitting }: FormikHelpers<AddSong>) => {
      props.addNewSong(values);
      setSubmitting(false);

    }
  });
  const genreTypes: Genre[] = ['CLASSICAL', 'POP', 'RAP', 'ROCK']
  return (
    <>

      <h1 className={classes.heder}>Add New Song</h1>

      <div>

        <Card className={classes.Card} >

          <CardMedia
            className={classes.CardMedia}
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
              select
              label="Genre"
              value={formik.values.genre}
              onChange={formik.handleChange}
              onSelect={formik.handleChange}
              error={formik.touched.genre && Boolean(formik.errors.genre)}
              helperText={formik.touched.genre && formik.errors.genre}
            >

              {genreTypes.map((option: string, index: number) => (
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
              Add  </Button>
          </form>
        </Card>
      </div>

      <BackButton />

    </>
  )
}
export default Add;










