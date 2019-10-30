import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import SearchPage from '../components/SearchPage';
import NotFoundPage from '../components/NotFoundPage';

export default class AppRouter extends React.Component {

  state = {
    imageUrl: undefined
  }

  fetchLatest = () => {
    fetch('https://xkcd.now.sh/?comic=latest')
      .then(response => response.json())
      .then((image) => {
        this.setState(() => ({
          imageUrl: image.img
        }))
      })
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header
           fetchLatest={this.fetchLatest}
          ></Header>
          <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/search" component={SearchPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
