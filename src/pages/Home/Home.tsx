import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';

import Search from '../../components/searchInput/search';
import Row from './Header and Rows/Row';

import { Genre, Song } from '../../moudel/Song';
import HederTitels from './Header and Rows/HederTitels';
import useStyles from './Home.style'

const Home: React.FC<{ songsList: Song[], searchArtist: Function, deleteSong: Function }> = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const addHandler = () => {
        navigate('/songs/new');
    }
    return <div className={classes.Home}>

        <div className={classes.heder}>
            <h1 className={classes.HomeHeder}>The Song Shop</h1>
            < div className={classes.Search}>
            <Search searchArtist={props.searchArtist}  />
            </div>
        </div>
        <HederTitels />
        <div>
            {
                Object.values(props.songsList).map((item: Song, index: number) => {
                    return <Row item={item} key={item.id + index} deleteSong={props.deleteSong} />;
                })
            }
            
        </div>
        <AddCircleIcon onClick={addHandler} className={classes.Button} />
    </div>;
}

export default Home;