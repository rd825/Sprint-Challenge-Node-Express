import React from 'react';
import { Route } from "react-router-dom";
import Projects from './components/Projects';
import Project from './components/Project';

const App = () => {
    return (
      <div className="App">

        <Route exact path='/' 
          render={(props) => (
            <Projects {...props} />
          )} 
        />

        <Route
          path="/:id"
          render={props => (
            <Project {...props} />
          )}
        />

      </div>
    );
}

export default App;