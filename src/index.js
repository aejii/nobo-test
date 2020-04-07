import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';

import Recherche from './recherche';
import Detail from './detail';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <>
      <Header/>
      <Router>
        <Switch>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/">
            <Recherche />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));