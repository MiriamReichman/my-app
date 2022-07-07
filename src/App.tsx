import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Edit from './pages/Edit/Edit';
import Add from './pages/Add/Add';
import { useParams } from "react-router";

function App() {

  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home />} />
    <Route path="/edit/:id" element={<Edit />} />
    <Route path="/add" element={<Add />} />
    </Routes>
  </BrowserRouter>
   
    </div>
  );
}

export default App;
