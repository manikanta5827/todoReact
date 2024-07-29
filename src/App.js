// import './App.css';
import { Heading, VStack } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import ThemeIcon from "./components/ThemeIcon";
import TodoContextProvider from "./context/TodoContext";

function App() {
  return (
  <TodoContextProvider>
     <div className="App">
      <VStack p={4}>
        <ThemeIcon />
        <AppName />
        <AddTodo />
        <TodoList />
      </VStack>
    </div>
  </TodoContextProvider>
  );
}

export default App;
