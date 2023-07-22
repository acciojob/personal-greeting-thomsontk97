
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let [name,setName] = useState("");

  return (
    <div>
      <p>       Enter your name:
</p>
    <input type="text" onChange={(e) => setName("Hello " + e.target.value + "!")}/>
    <p>{name}</p>
    </div>
  )
}

export default App
