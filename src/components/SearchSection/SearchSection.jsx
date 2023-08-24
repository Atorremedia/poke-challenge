import React from 'react'
import { Input, Typography } from 'antd';

function SearchSection(setChosenPokemon) {
  return (
      <div className="searchbar-container">
        <Input.Search placeholder="input search loading default" allowClear/>
      </div>
  )
}

export default SearchSection