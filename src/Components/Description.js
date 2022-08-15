import React from 'react';
import {useParams, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player'


function Description() {
  const location = useLocation()
  const {movie} = location.state
  
  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>{movie.Des}</p>
      <ReactPlayer url={movie.video} type="youtube"/>
    </div>
  )
}

export default Description;
