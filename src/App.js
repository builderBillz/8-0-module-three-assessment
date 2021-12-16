import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/common/Nav";
import Home from "./components/home/Home";
import Locations from "./components/locations/Locations";
import Movies from "./components/movies/Movies";
import People from "./components/people/People";
import films from "./data/films";






class App extends React.Component {
  constructor() {
      super();
      this.state = {
          allFilms:{films},
      }
    }

      render(){
          console.log(this.state.allFilms)    

        return (
          <div className="wrapper">
        <Nav/>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/movies">
          <Movies/>
        </Route>
        <Route path="/people">
          <People/>
        </Route>
        <Route path="/locations">
          <Locations/>
        </Route>
          
        </Switch>
      </div>
    );
   }
  }


export default App;