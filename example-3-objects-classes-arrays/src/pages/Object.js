import "./Object.css";
import React from "react";

function Object() {
  const objectDefinition =
    "Objects are a useful way to store data when you have a set of related values that you will be accessing or updating together within a given component.";

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
      <ul>
        <li>
          {exampleObjects.map((exampleObject, id) => {
            <ul key={id}>
              <li>Name: {exampleObject.name}</li>
              <li>Age: {exampleObject.age}</li>
              <li>Email: {exampleObject.email}</li>
            </ul>;
          })}
        </li>
      </ul>
    </div>
  );
}

export default Object;
