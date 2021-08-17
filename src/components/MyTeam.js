import React from 'react';
import { useState, useEffect } from 'react';
import {
    Stack,
    StackDivider,
    Badge,
    Box,
    SimpleGrid,
    useToast
} from '@chakra-ui/react';

import MemberCard from './MemberCard';

function MyTeam() {
    const toast = useToast();

    const [members, setMembers] = useState(
        () => JSON.parse(localStorage.getItem('members')) || []
    );

    function deleteMember(name) {
        const newMembers = members.filter((member) => {
            return member.name !== name;
        });
        setMembers(newMembers);
        toast({
            title: 'Member deleted.',
            status: 'success',
            duration: 2000,
            isClosable: true,
        });
    }

    useEffect(() => {
        localStorage.setItem('members', JSON.stringify(members));
    }, [members]);


    if (!members.length) {
        return (
            <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
                No Members !!!
            </Badge>
        );
    }

    return (
        <div>
            <Stack
                divider={<StackDivider />}
                borderColor='gray.100'
                borderWidth='2px'
                p='4'
                borderRadius='lg'
                w='100%'
                alignItems='stretch'
            >
                <SimpleGrid columns={3} spacing={10}>

                    {members.map((member) => (
                        <Box key={member.name} >
                            <MemberCard member={member} modifyMember={deleteMember} ></MemberCard>
                        </Box>
                    ))}
                </SimpleGrid>
            </Stack>
        </div>
    );
}

export default MyTeam;
