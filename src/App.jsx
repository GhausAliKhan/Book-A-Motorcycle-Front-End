import { useDispatch, useSelector } from "react-redux";
import "./App.css"
import { useState } from "react";
import { addString, cleanMessage } from "./slices/homeSlice";

function App() {
  const [input, setInput] = useState("");
  const { data, error } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(addString(input))
    setTimeout(() => {
      dispatch(cleanMessage())
    }, 2000)

    setInput("")
  };

  const updateInput = (e) => {
    setInput(e.target.value)
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      clickHandler()
    }
  };

  return (
    <div id ="container">
      <h2>{data.join(" ")}</h2>
      <input type="text" placeholder="Type something to add" onChange={ updateInput } onKeyDown={handleKeyDown} value={input} />
      <button type="button" onClick={ clickHandler }>Add</button>
      { error ? <small className="error-msg">{error}</small> : null }
    </div>
  );
}

export default App;
