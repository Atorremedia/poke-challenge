import React, { useState, useEffect } from 'react'
import './Sprite.css'

function Sprite({data}) {

  return (
    <>
          <div className="sprite-container">
      {data && (
            <img src={ data.sprites.front_default } alt="pokemon sprite" className="sprite" />
            )
            }
          </div>
    </>
  )
}

export default Sprite