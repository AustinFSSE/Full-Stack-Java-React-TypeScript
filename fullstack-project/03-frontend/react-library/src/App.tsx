import React from 'react';
import './App.css';
import {HomePage} from "./layouts/homepage/HomePage";
import {Navbar} from "./layouts/Navbar/Navbar";
import {Footer} from "./layouts/Footer/Footer";


export const App = () => {
  return (
      <div>
        <Navbar/>
        <HomePage/>
        <Footer/>
      </div>
  );
}

export default App;
