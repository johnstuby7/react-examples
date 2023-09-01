import { createContext, useContext, useState } from "react";

export const ToggleTheme = createContext();
const useStateValue = () => useContext(ToggleTheme);

export default function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Toggle value</button>
      <ToggleTheme.Provider value={toggle}>
        <DisplayValue />
      </ToggleTheme.Provider>
    </div>
  );
}

const DisplayValue = () => {
  const value = useStateValue();
  let array = ["javascript", "python"];
  return <div className="App">{<p>{value ? array[0] : array[1]}</p>}</div>;
};
