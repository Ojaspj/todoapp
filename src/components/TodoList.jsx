import { HStack, IconButton, StackDivider, Text, VStack, Spacer, Badge } from '@chakra-ui/react'
import React from 'react'
import {FaTrash} from 'react-icons/fa'

const TodoList = ({todos, deleteTodo}) => {

    if(!todos.length){
        return(
            <Badge colorScheme='green' fontSize={'md'} borderRadius={'lg'}>
                No todos yay!!
            </Badge>
        )
    }
   
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
                <IconButton icon={<FaTrash />} isRound='true' onClick={() => deleteTodo(todo.id)} />
                
            </HStack>
        ))}
    </VStack>
  )
}

export default TodoList