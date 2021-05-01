import nextId from "react-id-generator";
import { useMainContext } from "./Context/ContextProvider";

const TodoForm = () => {
  const {
    inputText,
    setInputText,
    todos,
    setTodos,
    setStatus,
  } = useMainContext();

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: nextId() }]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <div className="Form-submit">
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">Todos</option>
          <option value="completed">Completos</option>
          <option value="uncompleted">Incompletos</option>
        </select>
      </div>
    </form>
  );
};

export default TodoForm;
