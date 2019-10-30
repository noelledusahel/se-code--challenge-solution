import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header>
          </Header>
          <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/search" component={SearchPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
