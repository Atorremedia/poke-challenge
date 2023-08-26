import React, { useRef } from 'react'
import { Input, Typography, Alert } from 'antd';
import './SearchSection.css'


function SearchSection({setPokemonName, error}) {

  const inputRef = useRef()

  function onSearch(){
    let search = inputRef.current.input.value.toLowerCase().trimStart().trimEnd()
    setPokemonName(search)
  }

  return (
      <div className="searchbar-container">
        <Typography.Title level={ 3 }>
          Choose your Pokémon
        </Typography.Title>
        <Input.Search
          placeholder="your favorite Pokémon"
          onSearch={onSearch}
          enterButton
          ref={inputRef}
        />
        <div className="message-container">
          {error &&
            <Alert
              message="error"
              description="Pokémon not found!"
              type="error"
              showIcon
            />
          }
      </div>
      </div>
  )
}

export default SearchSection