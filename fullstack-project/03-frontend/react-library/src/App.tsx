import React from 'react';
import './App.css';
import {HomePage} from "./layouts/homepage/HomePage";
import {Navbar} from "./layouts/Navbar/Navbar";
import {Footer} from "./layouts/Footer/Footer";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import {BookCheckoutPage} from "./layouts/BookCheckoutPage/BookCheckoutPage";
import {oktaConfig} from "./lib/oktaConfig";
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import {LoginCallback, Security} from "@okta/okta-react";
import LoginWidget from "./auth/LoginWidget";

const oktaAuth = new OktaAuth(oktaConfig);


export const App = () => {

    const customAuthHandler = () => {
        history.push("/login");
    }
    const history = useHistory();

    const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
        history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
    }


  return (
      <div className={'d-flex flex-column min-vh-100'}>
          <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
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
                    <Route path='/login'
                           render={ () => <LoginWidget config={oktaConfig}/>}
                    />
                    <Route path='/login/callback'
                           component={LoginCallback}
                    />
                  </Switch>
              </div>
            <Footer/>
          </Security>
      </div>
  );
}

export default App;
