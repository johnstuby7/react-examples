import "./ObjectsAndArrays.css";
import React from "react";

function Object() {
  const objectDefinition =
    "Objects are a useful way to store data when you have a set of related values that you will be accessing or updating together within a given component.";

  const arrayDefinition =
    "Each data object/item in the array consists of properties that can be easily accessed and manipulated. For example, an array of objects in React could contain a list of car names, each of which has its own model and name.";
  const exampleObjects = [
    {
      id: 1,
      name: "John",
      age: 33,
      email: "test@test.com",
    },
    { id: 2, name: "Steve", age: 33, email: "Steve@test.com" },
  ];

  return (
    <div>
      <h1>Objects!</h1>
      <p>{objectDefinition}</p>

      <h1>Arrays!</h1>
      <p>{arrayDefinition}</p>

      <h1>A Example of a ordered list of the above array of objects</h1>
      {exampleObjects.map((exampleObject) => {
        return (
          <ul key={exampleObject.id}>
            <li>Name: {exampleObject.name}</li>
            <li>Age: {exampleObject.age}</li>
            <li>Email: {exampleObject.email}</li>
          </ul>
        );
      })}
      <p>
        Reference:
        https://bobbyhadz.com/blog/react-loop-through-array-of-objects
      </p>
    </div>
  );
}

export default Object;
