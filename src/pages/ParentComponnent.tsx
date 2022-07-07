import Home  from './Home/Home'
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { getSongsAction } from "../store/songSlice";
import Add from './Add/Add';
import Edit from './Edit/Edit';

export const ParentComponnent=()=> {
    const dispatch = useAppDispatch();
    useEffect(() => {
        //get products from api
        dispatch(getSongsAction());
    }, [])

    const navigate = useNavigate()
  //  const [songs, setSongs] = useState(useAppSelector(state => state.songs.songs))
    return (
      <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/songs">
              {/* <Route path="/songs" element={<p>display songs component </p>} /> */}
              <Route path="/songs/new" element={<Add/>} />
              <Route path="/songs/edit/:id" element={<Edit/>}/>
            </Route>
          </Routes>
   
      </div>
    );
  }
 

  

  