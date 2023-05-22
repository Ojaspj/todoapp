import { Heading, IconButton, Text, VStack } from "@chakra-ui/react"
import TodoList from "./components/TodoList"
import Added from "./components/Added"
import {FaSun} from "react-icons/fa"
import {useState, useEffect} from 'react'



function App() {

  const intialTodos = [
    {
        id:1,
        body: 'hello',
    },
    {
        id:2,
        body: 'getting tired',
    },
];

const [todos, setTodos] = useState(intialTodos);

function deleteTodo(id) {
  const newTodos = todos.filter(todo => {
    return todo.id !== id
  })
  setTodos(newTodos);
}

  return (
    <VStack p={4} >
      <IconButton icon={<FaSun/>} isRound = 'true' size={"lg"} alignSelf={"flex-end"} />
        <Heading  fontWeight={"bold"} size={"2xl"} bgGradient={"linear(to-r, pink.500, pink.300, blue.500)" } bgClip={'text'} >
          To Do Application
        </Heading>
        <TodoList todos = {todos} deleteTodo= {deleteTodo}/>
        <Added/>
    </VStack>
    
  )
}

export default App
