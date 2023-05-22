import { HStack, Input, Button } from '@chakra-ui/react'
import React from 'react'

const Added = () => {
  
    function handleSubmit(e){

    }

    return (
    <form  onSubmit={handleSubmit}>
        <HStack mt={4}>
            <Input variant={'filled'} placeholder='type your todo list here...'/>
            <Button colorScheme = 'pink' size={'md'} >Add ToDo</Button>
        </HStack>
    </form>
  );
}

export default Added