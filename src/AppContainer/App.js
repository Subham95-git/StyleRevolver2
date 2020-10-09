import React from 'react';
import './App.css';
import NavBar from '../Components/NavBar';
import Galleria from '../Components/Galleria';
import Carousel from '../Components/Carousel';

function App() {
  return (
    <React.Fragment>
    <NavBar></NavBar><br></br>
    <Galleria></Galleria><br></br>
    <Carousel></Carousel>
    </React.Fragment>
  );
}

export default App;
