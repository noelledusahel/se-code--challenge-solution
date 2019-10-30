import React from 'react';

const HomePage =(props) => {
  console.log(props)
  return (
    <img src={props.location.state.imageInfo.imageUrl}
     title={props.location.state.imageInfo.alt}
     alt={props.location.state.imageInfo.title}/>
  )
}
//   <div className={'latestImage'}>
//     <p>this is the home page</p>
//   </div>
// );
  // <div>
  //   <img className={'latestImage'} src={props.imageUrl} title={props.alt} alt={props.title}/>
  // </div>

export default HomePage;