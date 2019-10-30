import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import SearchPage from '../components/SearchPage';
import NotFoundPage from '../components/NotFoundPage';

export default class AppRouter extends React.Component {

  state = {
    latestImage: {}
  }

  componentDidMount = () => {
    fetch('https://xkcd.now.sh/?comic=latest')
      .then(response => response.json())
      .then((data) => {
        this.setState(() => ({
          latestImage: {
            imageUrl: data.img,
            alt: data.title,
            title: data.alt
          }
        })
      )})
      .catch(console.log)
    }

  // fetchLatest = () => {
  //   fetch('https://xkcd.now.sh/?comic=latest')
  //   .then(response => response.json())
  //   .then((image) => {
  //     this.setState(() => ({
  //       latestImage: {
  //         imageUrl: image.img,
  //         alt: image.title,
  //         title: image.alt
  //       }
  //     }))
  //   })
  // };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header
           componentDidMount={this.componentDidMount}
           latestImage={this.state.latestImage}>
          </Header>
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
