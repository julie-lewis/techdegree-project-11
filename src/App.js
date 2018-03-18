import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// App Components
import Nav from './Components/Nav';
import SearchForm from './Components/SearchForm';
import Cats from './Components/Cats';
import Dogs from './Components/Dogs';
import Beans from './Components/Beans';
import ImageList from './Components/ImageList';
import Error from './Components/Error';
import QueryResults from './Components/QueryResults';



const App = (props) => (

  <BrowserRouter>  

    <div className="container"> 

      <Nav />

      <Switch>

        <Route path= "/" exact render={ () => <ImageList /> } />
        <Route path= "/cats" component={Cats} />
        <Route path= "/dogs" component={Dogs} />
        <Route path= "/beans" component={Beans} />
        <Route path= "/search" exact component={SearchForm} />
        <Route path= "/search/:query" component={QueryResults} />
        <Route component={Error}></Route>

      </Switch>

    </div>

  </BrowserRouter>

);


export default App;
