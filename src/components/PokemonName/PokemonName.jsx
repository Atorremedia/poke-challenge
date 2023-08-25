import React from 'react'
import { Typography, Spin } from 'antd';

function PokemonName ({name, isLoading, error}) {

  return (
    <div className='pokemon-name'>
      {error && (
        <p>{error}</p>
      )}
        <div className="name-container">
            <Typography.Title>
              {isLoading 
              ? (
                <Spin />
              )
              :name && (
                name.toUpperCase()
              )
              } 
            </Typography.Title>
        </div>
    </div>
  )
}

export default PokemonName
