import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Header from '../components/Header'
import Rater from '../components/Rater'
import NoMatch from '../components/NoMatch'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:lang' component={Rater} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
