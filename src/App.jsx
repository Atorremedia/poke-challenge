import React, {useEffect, useState} from 'react'
import SearchSection from './components/SearchSection/SearchSection';
import PokemonName from './components/PokemonName/PokemonName';
import Sprite from './components/sprite/Sprite';
import Attributes from './components/Attributes/attributes';
import Stats from './components/stats/stats';
import './App.css'
import { API_URL, defaultPokemon } from '../appConfig';

function App() {

  const [pokemonName, setPokemonName] = useState(defaultPokemon)
  const [ data, setData ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    fetchPokemon(pokemonName)
  }, [pokemonName])

  const fetchPokemon = async (pokemon) => {

    setIsLoading(true)

    try {
      const response = await fetch(API_URL + pokemon)
      if (response.status !== 200) {
        throw new Error(`Error status: ${response.status}`)
      }
      const result = await response.json();
      setData(null)
      setError(null)
      setData(result)  
    }
    catch (error) {
      setError(error.message)
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <main className='app-container'>
          <div className="app-section">
            <SearchSection setPokemonName={ setPokemonName } error={ error }/>
            <PokemonName name={ pokemonName } isLoading={ isLoading } data={data}/>
          </div>
          <div className='app-section sprite-section'> 
            <Sprite data={ data } />
          </div>
          <div className='app-section attribute-section'> 
            <Attributes data={ data }/>
          </div>
          <div className='app-section stats-section'> 
            <Stats data={ data } isLoading={ isLoading } error={ error }/>
          </div>
    </main>
  )
}

export default App
