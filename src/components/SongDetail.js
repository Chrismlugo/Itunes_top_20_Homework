import React from 'react';

const SongDetail = (props) => {
  if(!props.song) return null;
  return (
    <article>
    <h3>
      {props.song.title.label}
    </h3>
    <p>Release Date: {props.song.im.releaseDate.attributes.label}</p>
    <p>Genre: {props.song.category.attributes.label}</p>
    <img src={props.song.im.image[0]} style={{width: "300px"}} alt={props.song.title}/>
  </article>
  )
}

export default SongDetail;
