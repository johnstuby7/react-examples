import React from "react";

import "./App.css";

function App() {
  function greet() {
    console.log("hello world");
  }
  greet();

  function combine(a, b, c) {
    return (a * b) / c;
  }

  console.log(combine(2, 6, 3));

  return (
    <div className="App">
      <header className="App-header">
        <p>Basic Functions</p>
      </header>
    </div>
  );
}

export default App;
