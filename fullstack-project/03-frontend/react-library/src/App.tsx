import React from 'react';
import './App.css';
import {HomePage} from "./layouts/homepage/HomePage";
import {Navbar} from "./layouts/Navbar/Navbar";
import {Footer} from "./layouts/Footer/Footer";
import {SearchBooksPage} from "./layouts/homepage/components/SearchBooksPage/SearchBooksPage";


export const App = () => {
  return (
      <div>
        <Navbar/>
        {/*<HomePage/>*/}
          <SearchBooksPage/>
        <Footer/>
      </div>
  );
}

export default App;
