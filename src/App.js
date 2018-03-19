import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components
import Nav from './Components/Nav';
import SearchForm from './Components/SearchForm';
import ImageContainer from './Components/ImageContainer';
import Error from './Components/Error';
import QueryResults from './Components/QueryResults';


//Sets up component paths for navigation and rendering, provides 404 fallback (error)
const App = (props) => (

  <BrowserRouter>  

    <div className="container"> 

      <Nav />

      <Switch>
        <Route path= "/" exact render={ () => <ImageContainer query="squirrels"/> } />
        <Route path= "/cats" render={ () => <ImageContainer query="cats"/> } />
        <Route path= "/dogs" render={ () => <ImageContainer query="dogs"/> } />
        <Route path= "/beans" render={ () => <ImageContainer query="beans"/> } />
        <Route path= "/search" exact component={SearchForm} />
        <Route path= "/search/:query" component={QueryResults} />
        <Route component={Error}></Route>

      </Switch>

    </div>

  </BrowserRouter>

);


export default App;
