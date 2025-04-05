import React from 'react';
import './App.css';
import {HomePage} from "./layouts/homepage/HomePage";
import {Navbar} from "./layouts/Navbar/Navbar";
import {Footer} from "./layouts/Footer/Footer";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";
import {Redirect, Route, Switch} from "react-router-dom";
import {BookCheckoutPage} from "./layouts/BookCheckoutPage/BookCheckoutPage";


export const App = () => {



  return (
      <div className={'d-flex flex-column min-vh-100'}>
        <Navbar/>
          <div className={'flex-grow-1'}>
              <Switch>
                <Route exact path="/">
                  <Redirect to={'/home'}/>
                </Route>
                  <Route path={'/home'}>
                      <HomePage/>
                  </Route>
                <Route path={'/search'}>
                  <SearchBooksPage/>
                </Route>
                <Route path={'/checkout/:bookId'}>
                    <BookCheckoutPage/>
                </Route>
              </Switch>
          </div>
        <Footer/>
      </div>
  );
}

export default App;
