import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify(newList));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDelete(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEdit(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDelete(index);
  }

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(localTodos);
  }, []);

  return (
    <>
      <main>
        <TodoInput
          handleAddTodos={handleAddTodos}
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          handleEdit={handleEdit}
        />
        <TodoList todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} />
      </main>
    </>
  );
}

export default App;
