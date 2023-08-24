import React, {useState} from 'react'
import { useFetchPokemon } from './hooks/useFetchPokemon';
import SearchSection from './components/SearchSection/SearchSection';
import PokemonName from './components/PokemonName/PokemonName';
import Sprite from './components/sprite/Sprite';
import Attributes from './components/Attributes/attributes';
import Stats from './components/stats/stats';
import './App.css'

function App() {

  const [pokemonName, setPokemonName] = useState('bulbasaur')
  
  const { data, isLoading, error } = useFetchPokemon(pokemonName)
  
  return (
    <main className='app-container'>

      {isLoading && (
        <h1>Loading...</h1>
      )}
      {error && (
      <p>{error}</p>
    )}
      {data && (
        <>
          <div className="app-section">
            <SearchSection setPokemonName={setPokemonName} />
            <PokemonName name={ pokemonName }/>
          </div>
          <Sprite data={ data } /> 
          <div className='app-section attribute-section'> 
            <Attributes data={ data }/>
          </div>
          <div className='app-section'> 
            <Stats data= { data }/>
          </div>
        </>
      )
      }
</main>
  )
}

export default App
