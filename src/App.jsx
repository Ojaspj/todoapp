import { Heading, IconButton, Text, VStack } from "@chakra-ui/react"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo" 
import {FaSun} from "react-icons/fa"


function App() {

  return (
    <VStack p={4} >
      <IconButton icon={<FaSun/>} isRound = 'true' size={"lg"} alignSelf={"flex-end"} />
        <Heading mb={8} fontWeight={"bold"} size={"2xl"} bgGradient={"linear(to-r, pink.500, pink.300, blue.500)" } bgClip={'text'} >
          To Do Application
        </Heading>
        <TodoList />
    </VStack>
    
  )
}

export default App
