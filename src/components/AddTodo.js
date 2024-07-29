import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";
import { HStack, Button, Input, useToast } from "@chakra-ui/react";
const AddTodo = () => {
  const { setTodo } = useTodo();
  const [content, setcontent] = useState("");
  const toast = useToast();
  function check(e) {
    e.preventDefault();
    //if content is empty
    if (!content) {
      toast({
        title: "No content",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    setTodo(content);
    setcontent("");
  }

  return (
    <form onSubmit={check}>
      <HStack w="100%" alignItems="stretch" mb='5'>
        <Input
          value={content}
          type="text"
          variant="filled"
          placeholder="Enter a Todo"
          onChange={(e) => setcontent(e.target.value)}
        />
        <Button type="submit" bgColor="pink" p="5">
          submit
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
