import React from 'react';

export default class HomePage extends React.Component {
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
            title: data.alt,
            date: `${data.month}/${data.day}/${data.year}`
          }
        })
      )})
      .catch(console.log)
  }
  render() {
    return (
      <div>
        <h4>{this.state.latestImage.date}</h4>
        <img
          className="latestImage"
          src={this.state.latestImage.imageUrl}
          title={this.state.latestImage.alt}
          alt={this.state.latestImage.title}/>
      </div>
    )
  }
}