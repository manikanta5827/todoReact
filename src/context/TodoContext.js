import { useState, createContext, useContext, useEffect } from "react";
import { nanoid } from "nanoid";

const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

function TodoContextProvider(props) {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function setTodo(newBody) {
    const newTodo = { id: nanoid(), body: newBody };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function updateTodo(id, body) {
    const newContent = prompt("Enter new content", body) || body;
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, body: newContent } : todo
      )
    );
  }

  const value = { todos, setTodo, deleteTodo, updateTodo };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
}

export default TodoContextProvider;
