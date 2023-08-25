import React, {useEffect, useState} from "react"
import { API_URL } from "../../appConfig"

export function useFetchPokemon (pokemonName) {

    const [ data, setData ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    useEffect(() => {
    setIsLoading(true)
      fetch(API_URL + pokemonName)
          .then(res => res.json())
          .then(data => setData(data))
          .catch((error) => setError(error))
          .finally(()=> setIsLoading(false))
        }, [])
    
    return { data, isLoading, error }

}
