import React from 'react';

const HomePage =(props) => {
  return (
    <img
      className="latestImage"
      src={props.location.state.imageInfo.imageUrl}
      title={props.location.state.imageInfo.alt}
      alt={props.location.state.imageInfo.title}/>
  )
}

export default HomePage;