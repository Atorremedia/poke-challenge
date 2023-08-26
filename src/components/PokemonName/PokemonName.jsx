import React from 'react'
import { Typography, Spin } from 'antd';
import './PokemonName.css'

function PokemonName ({isLoading, data}) {

  return (
    <div className='pokemon-name'>
      <div className="name-container">
        <Typography.Title>
          {isLoading &&
            <Spin />
          }
          {data &&
            data.species.name.toUpperCase()
          } 
        </Typography.Title>
      </div>
    </div>
  )
}

export default PokemonName
