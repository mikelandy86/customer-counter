import React from "react";
import ReactDOM from "react-dom/client";
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el"); // Grabbing the element of save text (Won't work because React Project?)
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
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  // 3. Render the variable in the saveEl using innerText
  // NB: Make sure to not delete the existing content of the paragraph
}
