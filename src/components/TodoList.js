import React from "react";
import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,Badge
} from "@chakra-ui/react";
import { FaTrash,FaMagento  } from "react-icons/fa";
import {useTodo} from '../context/TodoContext';

const TodoList = () => {
    const {todos,deleteTodo,updateTodo}=useTodo();

    if(!todos.length){
      return (
      <Badge colorScheme="green" padding='4' borderRadius='lg' m='6'>No Todo's Yet ..!</Badge>
      )
    }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.300"
      borderWidth="2px"
      p="4"
      width="50%"
      borderRadius="lg"
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton icon={<FaMagento/>} isRound='true' onClick={()=>updateTodo(todo.id,todo.body)}></IconButton>
          <IconButton icon={<FaTrash />} isRound="true" onClick={()=>deleteTodo(todo.id)}></IconButton>
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
