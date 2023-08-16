# Installation and configuration:

- Install node and npm: npm install -g npm
- Create a new react project: npx create-react-app app-name
- run npm run dev and navigate to localhost:3000 to ensure everything is working correctly
- make sure you have a .babelrc file in the root of your directory with the following in it:

```
{
  "presets": ["next/babel"],
  "plugins": []
}
```

- and update eslint:
- "extends": ["next/babel","next/core-web-vitals"]

# Terminology:

- Constants: Work like variables, but must not be reassigned
- Variable: base data value. If you use var outside of a function, it belongs to the global scope. If you use var inside of a function, it belongs to that function
- Operators: Operators are used to performing specific mathematical and logical computations on operands
- Function: A React functional component is a simple JavaScript function that accepts props and returns a React element.
- Parameter: React parameters are used in React routing, where we have parameters we need to access in the route. For example, if we had a route such as <Route path=”/:id” /> we could access that particular string or value in the route by calling the useParams hook. let { id } = useParams();
- Arrow Function: The arrow function is basically an anonymous function which accepts a fixed number or arguments, and operates in the context of the enclosing scope.
- Spread operator: Pulls out values from a array and adds them as comma seperated values to another array
- Primitive Values: String, number, bigint, boolean, undefined, symbol, and null are the seven primitive data types
- Reference values: objects are considered reference values.
- Components: are independent and reusable bits of code.
- Declarative Approach: we describe the final UI we want for each scene. We may structure the component differently
- Props: Props are arguments passed into React components.
- Composition: is a development pattern based on React's original component model where we build components from other components using explicit defined props or the implicit children prop
- Custom Hooks: Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". Example: useFetch.
- React Hooks: are simple JavaScript functions that we can use to isolate the reusable part from a functional component.
- Object: Objects are a useful way to store data when you have a set of related values that you will be accessing or updating together within a given component.
- Arrays: An array is a collection of similar data elements stored at contiguous memory locations.

# Good Resources:

- https://shipshape.io/blog/react-objects-and-state/
