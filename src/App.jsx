import { useState } from "react";
import "./App.css";
import "./index.jsx";
function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1>Customer counter!</h1>
        <h2 id="count-el">{count}</h2>
        <button id="increment-btn" onClick={increment}>
          Increment
        </button>
        <button id="save-btn" onClick={save}>
          Save
        </button>
        <p id="save-el">Previous numbers: {"\u00A0"}</p>
      </div>
    </div>
  );
}

export default App;
