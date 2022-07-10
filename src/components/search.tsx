import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch } from '../store/hook';
import { getSongsByArtist } from '../store/songSlice';


const Search: React.FC<{searchArtist:Function}> = (props) => {
  const [search, setSearch] = useState('')
  
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px', display: 'flex', width: 200, position: "absolute",
        right: '5px',
      }}
    >
      {/* //T0 D0 :add types */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter song artist "
        inputProps={{ 'aria-label': 'search ' }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      // onMouseLeave={()=>dispatch(getSongsByArtist(search))}
      />
  
      <SearchIcon sx={{ p: '5px' }} type="submit" onClick={() => { props.searchArtist(search) }} />


    </Paper>
  );
}
export default Search;