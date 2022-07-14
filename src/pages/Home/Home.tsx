import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import Search from '../../components/searchInput/search';
import Row from './Header and Rows/Row';

import { Genre, Song } from '../../moudel/Song';
import HederTitels from './Header and Rows/HederTitels';
import { makeStyles } from '@mui/styles';
import { SongCard } from './otherOptionsToDisplaySongs/SongCard';
const useStyles = makeStyles({
    Button: {
        borderBlockColor: 'white',
        color: 'white',
        height: 100,
        width: 100,
        padding: '0 30px',
        position: 'absolute',
        margin: 'auto',
    }
});

const Home: React.FC<{ songsList: Song[], searchArtist: Function, deleteSong: Function }> = (props) => {
    const classes = useStyles();

    const songsList = props.songsList;


    const navigate = useNavigate();
    const addHandler = () => {
        navigate('/songs/new');
    }
    return <div className='Home'>

        <div className='heder'>
            <h1 className='Home-heder'>The Song Shop</h1>
            <Search searchArtist={props.searchArtist} />
        </div>
        <HederTitels />
        <div>
            {
                Object.values(songsList).map((item: Song, index: number) => {
                    return <Row item={item} key={item.id + index} deleteSong={props.deleteSong} />;
                })
            }
            
        </div>
        <AddCircleIcon onClick={addHandler} className={classes.Button} />
    </div>;
}

export default Home;