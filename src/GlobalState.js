import React, { createContext } from 'react'
import PokemonAPI from './api/PokemonAPI'

export const GlobalState = createContext()


export const DataProvider = ({ children }) => {

    const state = {
        pokemonAPI: PokemonAPI()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}