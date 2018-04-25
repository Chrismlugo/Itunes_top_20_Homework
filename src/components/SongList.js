import React from 'react';


const SongList = (props) => {

  const songLis = props.songs.map((song, index) => {
    return(
    <ul key={index}>
     <li>number{index + 1}: {song.title.label}</li>
     <li>Genre: {song.category.attributes.label}</li>
     <li><img src={song['im:image'][0]['label']} style={{width: "100px"}} alt={song.title.label}/></li>
   </ul>
 );
  });




  return (
    <React.Fragment>
    {songLis}
  </React.Fragment>
  )
}

export default SongList;
