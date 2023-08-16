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

  // Arrow functions example:
  // The arrow function is basically an anonymous function which accepts a fixed number or arguments, and operates in the context of the enclosing scope.
  const hello = () => {
    return "Arrow function!";
  };
  console.log(hello());

  // It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the
  // return keyword:
  const helloShortened = () =>
    "Shortened arrow function, since it only returns 1 value!";

  console.log(helloShortened());

  // Greet user Example:
  function greetUser(userName, message) {
    console.log(userName);
    console.log(message);
  }

  greetUser("John", "Hello");

  return (
    <div className="App">
      <header className="App-header">
        <p>Basic Functions</p>
      </header>
    </div>
  );
}

export default App;
