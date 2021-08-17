import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { GlobalState } from '../GlobalState'
import {
    Stack,
    StackDivider,
    Link,
    SimpleGrid,
    Box,
    Input,
    HStack,
    Flex,
    Spacer,
    useToast
} from '@chakra-ui/react';
import CardItem from './CardItem';

function Home() {


    const state = useContext(GlobalState)
    const [pokemons] = state.pokemonAPI.pokemons
    const [current, setCurrent] = state.pokemonAPI.current
    const [prev] = state.pokemonAPI.prev
    const [next] = state.pokemonAPI.next
    const [search, setSearch] = state.pokemonAPI.search

    const [members, setMembers] = useState(
        () => JSON.parse(localStorage.getItem('members')) || []
    );

    useEffect(() => {
        localStorage.setItem('members', JSON.stringify(members));
    }, [members]);

    const toast = useToast();

    function addMember(member) {
        if (members.length == 6) {
            toast({
                title: 'Maximum 6 members in a team.',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
            return;
        }

        const newMembers = members.filter((mm) => {
            return mm.name == member.name;
        });

        if (newMembers.length > 0) {
            toast({
                title: 'Member already added.',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
            return;
        }

        const m = {
            name: member.name,
            height: member.height,
            weight: member.weight,
            image: member.sprites.front_shiny
        };

        setMembers([...members, m]);
        toast({
            title: 'Member added.',
            status: 'success',
            duration: 2000,
            isClosable: true,
        });
    }

    return (
        <Stack
            divider={<StackDivider />}
            borderColor='gray.100'
            borderWidth='2px'
            p='4'
            borderRadius='lg'
            w='100%'
            alignItems='stretch'
        >

            <Flex>
                <Box p="4" >
                    {prev != null ? <Link color="teal.500" onClick={() => setCurrent(prev)}>Prev</Link> : ""}
                </Box>
                <Spacer />
                <Box p="4" >
                    {next != null ? <Link color="teal.500" onClick={() => setCurrent(next)}>Next</Link> : ""}
                </Box>
            </Flex>


            <Input placeholder="Search" size="sm" value={search} onChange={(e) => setSearch(e.target.value)} />
            <SimpleGrid columns={5} spacing={10}>

                {

                    pokemons.map((pokemon) => (

                        <Box key={pokemon.data.name}>
                            <CardItem member={pokemon.data} modifyMember={addMember}  ></CardItem>
                        </Box>
                    ))
                }

            </SimpleGrid >
        </Stack>
    );
}

export default Home;
