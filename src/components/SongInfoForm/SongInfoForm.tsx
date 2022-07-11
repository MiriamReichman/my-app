
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field, ErrorMessage, useFormik
  //FieldProps,
} from 'formik';

import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { maxWidth } from '@mui/system';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Genre, Song } from '../../Song';


import { addSongtype } from '../../store/songSlice';
import { useAppSelector, useAppDispatch } from '../../store/hook';

const validationSchema = Yup.object({
  title:
    Yup.string()
      .required('Genre is required'),
  length: Yup
    .string()
    .min(2, 'length should be of minimum 2 characters length')
    .required('length is required'),
});



const SongInfoForm: React.FC<{ song: Song, buttonDescription: string, action: addSongtype }> = (props) => {

  const dispatch = useAppDispatch();

  const initialValues: Song = props.song;
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: Song, { setSubmitting }: FormikHelpers<Song>) => {
      debugger
      //console.log('will soon use dispatch with this action name:',props.onsubmit)
      console.log({ values, setSubmitting });
      dispatch(props.action(values));

      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);

    }

  });
  const genreTypes = [Genre.CLASSICAL, Genre.POP, Genre.RAP, Genre.ROCK]


  return (
    <div>
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
          value={formik.values.genre}
          onSelect={formik.handleChange}
          error={formik.touched.genre && Boolean(formik.errors.genre)}
          helperText={formik.touched.genre && formik.errors.genre}
        >
          {genreTypes.map((option) => (
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
          {props.buttonDescription}  </Button>
      </form>
    </div>
  );
};
export default SongInfoForm;