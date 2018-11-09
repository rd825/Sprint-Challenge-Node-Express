import React from 'react';
import { Route } from "react-router-dom";
import Projects from './components/Projects';

const App = () => {
    return (
      <div className="App">

        <Route exact path='/' 
          render={(props) => (
            <Projects {...props} />
          )} 
        />

      </div>
    );
}

export default App;