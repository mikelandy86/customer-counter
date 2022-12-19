import { useState } from "react";
import "./App.css";

let count = 0;
// Grabbing the element of save text (Won't work because React Project?)
let saveAndSep = "";

function increment() {
  count += 1;
  document.getElementById("count-el").innerText = count;
}

function save() {
  saveAndSep = count + " - ";
  document.getElementById("save-el").innerHTML += saveAndSep;
  count = 0;
  document.getElementById("count-el").innerText = count;
}

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
