import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';

function MemberCard({ member, modifyMember }) {

    return (
        <Center py={6}>
            <Box
                maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>

                <Flex justify={'center'} mt={2}>
                    <Avatar
                        size={'xl'}
                        src={
                            member.image
                        }
                        alt={'Author'}
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            {member.name}
                        </Heading>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>{member.height} </Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Height
                            </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>{member.weight}</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Weight
                            </Text>
                        </Stack>
                    </Stack>

                    <Button
                        w={'full'}
                        mt={8}
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}
                        onClick={() => modifyMember(member.name)}
                    >
                        Delete

                    </Button>

                </Box>
            </Box>
        </Center>
    )
}

export default MemberCard
