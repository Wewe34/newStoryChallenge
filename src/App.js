import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import SearchPage from './SearchPage';

function App() {
  return (
    <div>
       <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/search" component={SearchPage} />
        </Switch>
    </div>
  );
}

export default App;
