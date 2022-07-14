import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';



const Search: React.FC<{searchArtist:Function}> = (props) => {
  const [searchArtistInput, setSearchArtistInput] = useState('')
  
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px', display: 'flex', width: 200, position: "absolute",
        right: '5px',
      }}
    >

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter song artist "
        inputProps={{ 'aria-label': 'search ' }}
        value={searchArtistInput}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearchArtistInput(e.target.value)}
    
      />
  
      <SearchIcon sx={{ p: '5px' }} type="submit" onClick={() => { props.searchArtist(searchArtistInput) }} />


    </Paper>
  );
}
export default Search;