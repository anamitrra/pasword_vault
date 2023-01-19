import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState({
    password: "",
    description: "",
  });

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:8800/add`, input);
    } catch (err) {
      console.log(`Front-end Error: ${err}`);
    }
  };


  return (
    <>
      <div className="App">
        <div className="AddingPassword">
          <input
            type="text"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            placeholder="Enter Description"
            name="description"
            onChange={handleChange}
          ></input>
          <button onClick={handleClick}>Encrypt Password</button>
        </div>
      </div>
    </>
  );
}

export default App;
