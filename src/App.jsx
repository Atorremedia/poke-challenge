import React, {useEffect, useState} from 'react'
import { useFetchPokemon } from './hooks/useFetchPokemon';
import SearchSection from './components/SearchSection/SearchSection';
import PokemonName from './components/PokemonName/PokemonName';
import Sprite from './components/sprite/Sprite';
import Attributes from './components/Attributes/attributes';
import Stats from './components/stats/stats';
import './App.css'
import { API_URL, defaultPokemon } from '../appConfig';

function App() {

  const [pokemonName, setPokemonName] = useState(defaultPokemon)

  useEffect(() => {
    handleClick(pokemonName)
  }, [pokemonName])

  const [ data, setData ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  const handleClick = async (pokemon) => {
    console.log ('fetching...')
    setIsLoading(true)

    try {
      const response = await fetch(API_URL + pokemon)

      if (response.status !== 200) {
        throw new Error(`Error status: ${response.status}`)
      }
      const result = await response.json();
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
            <SearchSection setPokemonName={setPokemonName} />
            <PokemonName name={ pokemonName } isLoading={ isLoading } error={ error }/>
          </div>
          {data &&(
            <>
            <div className='app-section sprite-section'> 
              <Sprite data={ data } />
            </div>
            <div className='app-section attribute-section'> 
              <Attributes data={ data } isLoading={ isLoading } error={ error }/>
            </div>
            <div className='app-section'> 
              <Stats data={ data } isLoading={ isLoading } error={ error }/>
            </div>
          </>
          )}
</main>
  )
}

export default App
