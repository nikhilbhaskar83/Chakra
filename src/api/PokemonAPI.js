import { useState, useEffect } from 'react'
import axios from 'axios'

function PokemonAPI() {
    const [pokemons, setPokemons] = useState([])
    const [search, setSearch] = useState('')
    const [current, setCurrent] = useState(`https://pokeapi.co/api/v2/pokemon`)
    const [prev, setPrev] = useState('')
    const [next, setNext] = useState('')

    useEffect(() => {
        const getPokemons = async () => {
            const res = await axios.get(current)
            setPrev(res.data.previous)
            setNext(res.data.next)

            const details = await Promise.all(res.data.results.map((pok) => {
                return axios.get(`https://pokeapi.co/api/v2/pokemon/${pok.name}`)

            }));
            setPokemons(details)
        };

        getPokemons()
    }, [current])

    useEffect(() => {
        const getPokemons = async () => {
            if (search == '') {
                const res = await axios.get(current)
                setPrev(res.data.previous)
                setNext(res.data.next)

                const details = await Promise.all(res.data.results.map((pok) => {
                    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pok.name}`)

                }));
                setPokemons(details)
            }
            else {
                setPrev(null)
                setNext(null)

                const details = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
                setPokemons([details])
            }
        };

        getPokemons()
    }, [search])

    return {

        pokemons: [pokemons, setPokemons],
        current: [current, setCurrent],
        prev: [prev, setPrev],
        next: [next, setNext],
        search: [search, setSearch]
    }
}

export default PokemonAPI
