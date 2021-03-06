import Todo from "./Todo";
import { useMainContext } from "./Context/ContextProvider";

const TodoList = () => {
  const { todos, setTodos, filteredTodos } = useMainContext();

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
            todo={todo}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
