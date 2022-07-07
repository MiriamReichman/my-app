import React, { useEffect, useState } from 'react';


import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';

import './Home.css'

import Search from '../../components/search';
import CustomizedTables from '../../components/table';
import Row from '../../components/Row';

import { Gener, Song } from '../../Song';
import HederTitels from '../../components/HederTitels';
import { useAppSelector, useAppDispatch } from '../../store/hook';
import { receivedSongs,getSongsAction } from '../../store/songSlice'
const Home = () => {

    const dispatch = useAppDispatch();
    // useEffect(() => {
    //     //get products from api
    //     // const songs = [new Song('123', 'blessing', 'Beni Fredman', Gener.POP, 1, 40),
    //     // new Song('1234', 'blessing@', 'Beni Fredman', Gener.POP, 1, 40)]
    //     dispatch(getSongsAction());

    // }, [])
    const songsList = useAppSelector(state => state.songs.songs)
    const navigate = useNavigate();
    const add = () => {
        navigate('/songs/new');
    }
    return <div className='Home'>

        <div className='heder'>
            <h1 className='Home-heder'>The Song Shop</h1>
            <Search />
        </div>
        <HederTitels />
        <div>
            {
                Object.values(songsList).map((item: Song,index:number) => {
                    return <Row item={item} key={item.id+index} />;
                })
            }
        </div>

        {/* <CustomizedTables /> */}
        <AddCircleIcon onClick={add} />
    </div>;
}


// #endregion

export default Home;