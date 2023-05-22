import { HStack, IconButton, StackDivider, Text, VStack, Spacer } from '@chakra-ui/react'
import React from 'react'
import {FaTrash} from 'react-icons/fa'

const TodoList = () => {
    const todos = [
        {
            id:1,
            body: 'hello',
        },
        {
            id:2,
            body: 'getting tired',
        },
    ];
  return (
    <VStack divider={<StackDivider/>} 
            borderColor={'gray.200'} 
            borderWidth={2} 
            borderRadius={'lg'} 
            p={4} 
            w={'100%'}
            maxW={{base: '90vw', sm: '80vw', lg:'50vw', xl:'40vw'}}
            alignItems={'stretch'}
            >
        {todos.map(todo => (
            <HStack key={todo.id}>
                <Text>{todo.body}</Text>
                <Spacer />
                <IconButton icon={<FaTrash />} isRound='true' />
            </HStack>
        ))}
    </VStack>
  )
}

export default TodoList