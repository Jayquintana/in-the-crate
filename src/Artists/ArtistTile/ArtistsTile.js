import React from 'react'
import './ArtistsTile.css'
import { Link } from 'react-router-dom';

const ArtistsTile = ({ name, artistImage, id}) => {
  return (
    <div className="card" id={`${id}`}>
      <div className="cover">
        <img src={`${artistImage[0].uri}`} alt="cover" />
        <div className="play-icon">
          <p className='logo-info'>Info</p>
        </div>
      </div>
      <div className="card-content">
        <h4>{name}</h4>
        <p>Hip Hop</p>
      </div>
    </div>
  )
}

export default ArtistsTile; 