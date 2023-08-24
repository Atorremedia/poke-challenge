import React from 'react'
import { Typography } from 'antd';

function PokemonName ({name}) {

  return (
    <div className='pokemon-name'>
      {name && (
        <div className="name-container">
            <Typography.Title>
                {name.toUpperCase()} 
            </Typography.Title>
        </div>
        )}
    </div>
  )
}

export default PokemonName
