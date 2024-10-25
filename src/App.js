import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  const [id, setId] = useState(0);
  const getAdvice = async function () {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setId(data.slip.id);
    setCount((c) => c + 1);
    console.log(data);
  };

  return (
    <div className="App">
      <h1>{advice}</h1>
      <p>{id > 0 ? `advice id:(${id})` : ""} </p>
      <button className="btn" onClick={getAdvice}>
        get advice
      </button>
      <h3>{count > 0 ? `you read (${count}) advices` : ""}</h3>
    </div>
  );
}

export default App;
