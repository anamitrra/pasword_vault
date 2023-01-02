import './App.css';
import { useState } from "react";
import axios from "axios";

function App() {

  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  const addPassword = () => {
    axios.post(`http://localhost:3001/addpassword`, {
      description: description,
      password: password,

    });
  };
  console.log(description);

  return (
    <>
      <div className="App">
        <div className="AddingPassword">
          <input type="text" placeholder="Enter Password" onChange={(event) => { setPassword(event.target.value); }}></input>
          <input type="text" placeholder="Enter Description" onChange={(event) => { setDescription(event.target.value); }}></input>
          <button onClick={addPassword}>Encrypt Password</button>
        </div>
      </div>
    </>
  );
}

export default App;
