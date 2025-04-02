import React from 'react';
import './App.css';
import {Navbar} from "./layouts/Navbar/Navbar";
import {ExploreTopBooks} from "./layouts/homepage/ExploreTopBooks";
import {Carousel} from "./layouts/homepage/Carousel";

function App() {
  return (
      <div>
        <Navbar/>
        <ExploreTopBooks />
        <Carousel/>
      </div>
  );
}

export default App;
