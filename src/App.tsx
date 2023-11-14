import React from 'react';
import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
