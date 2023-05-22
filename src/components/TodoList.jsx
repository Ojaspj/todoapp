import { HStack, IconButton, Text, VStack } from '@chakra-ui/react'
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
    <VStack>
        {todos.map(todo => (
            <HStack>
                <Text>{todo.body}</Text>
                <IconButton icon={<FaTrash />} isRound='true' />
            </HStack>
        ))}
    </VStack>
  )
}

export default TodoList