import React, { useEffect, useState } from 'react';


import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';

import './Home.css'

import Search from '../../components/searchInput/search';
import CustomizedTables from '../../components/table';
import Row from '../../components/Header and Rows/Row';

import { Gener, Song } from '../../Song';
import HederTitels from '../../components/Header and Rows/HederTitels';

const Home : React.FC<{ songsList: Song[],searchArtist:Function ,deleteSong:Function}>= (props) => {


    const songsList=props.songsList;
  

    const navigate = useNavigate();
    const add = () => {
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
                Object.values(songsList).map((item: Song,index:number) => {
                    return <Row item={item} key={item.id+index} deleteSong={props.deleteSong}/>;
                })
            }
        </div>

        {/* <CustomizedTables /> */}
        <AddCircleIcon onClick={add} />
    </div>;
}


// #endregion

export default Home;