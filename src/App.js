import { ContextProvider } from "./components/Context/ContextProvider";

import "./styles/global.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <header>
          <h1>Lista de Afazeres</h1>
        </header>
        <TodoForm />
        <TodoList />
      </ContextProvider>
    </div>
  );
}

export default App;
