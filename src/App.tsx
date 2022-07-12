import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

import Add from './pages/Add/Add';
import { useParams } from "react-router";
import { ParentComponnent } from './pages/ParentComponnent';

function App() {

  return (
    <div className="App">
      <ParentComponnent/>
    </div>
  );
}

export default App;
