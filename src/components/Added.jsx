import { HStack, Input, Button, useToast } from '@chakra-ui/react'
import {useState} from 'react'
import { nanoid } from 'nanoid';


const Added = ({addTodo}) => {


        const toast = useToast()
  
    function handleSubmit(e){
        e.preventDefault();
        if(!content){
            toast({
                title: 'No Content',
                status: 'error',
                duration: 3000,
                isClosable: true,
              });
            return 
        }
        const todo = {
            id: nanoid(),
            body: content,
        }
        addTodo(todo);
        //resets input field
        setContent('');
    }

    const [content, setContent] = useState('');

    return (
    <form  onSubmit={handleSubmit}>
        <HStack mt={4}>
            <Input variant={'filled'} 
                placeholder='type your todo list here...' 
                value={content} 
                onChange={(e) => setContent(e.target.value)}/>
            <Button colorScheme = 'pink' size={'md'} type='submit'>Add ToDo</Button>
        </HStack>
    </form>
  );
}

export default Added