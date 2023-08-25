import React, { useRef, useState } from 'react'
import { Input, Typography } from 'antd';
import { useFetchPokemon } from '../../hooks/useFetchPokemon';
import { API_URL } from '../../../appConfig';

function SearchSection({setPokemonName}) {

  const inputRef = useRef()

  function onSearch(){
    console.log(inputRef.current.input.value)
    setPokemonName(inputRef.current.input.value)
  }

  return (
      <div className="searchbar-container">
        <Input.Search
        placeholder="choose your favorite Pokémon"
        onSearch={onSearch}
        enterButton
        ref={inputRef}
        
        />
      </div>
  )
}

export default SearchSection