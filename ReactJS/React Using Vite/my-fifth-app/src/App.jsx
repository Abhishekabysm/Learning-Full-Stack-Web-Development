import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [btn, setBtn] = useState(false);
  const [todos, setTodos] = useState([
    {
      title: "Abhishek",
      desc: "My name is Abhishek",
    },
    {
      title: "Anurag",
      desc: "My name is Anurag",
    },
    {
      title: "Abhinav",
      desc: "My name is Abhinav",
    },
  ]);

  const Todo = ({ todo }) => {
    return (
      <>
        <div className="m-4 border-1"></div>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </>
    );
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {btn ? <button>Click Me To on</button> : <button>Click Me To off</button>}
      {/* {btn && <button>Click Me Bro Please</button>} */}
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
      <div className="card">
        <button onClick={() => setBtn(!btn)}>click to toggle</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
