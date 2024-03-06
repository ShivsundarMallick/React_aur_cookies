import { useState } from "react"; // the usestate hook
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//the  hooks are feature in react that helps to take multiple updation can be donein different places with a single action

function App() {
    const [count ,setCounter] = useState(0)
  // let count = 0;
  // the add value function
  const addvalue = () => {

    // count = count + 1;
    // console.log(count);
    // return count
    if(count < 20)
      setCounter(count => count +1)
    else  
      console.log("count equal to 20");
  };
  const removevalue = () => {
    // count = count - 1;
    if(count > 0)
      setCounter(count => count -1)
    else
      console.log("count equl to zero"); 
    
  };
  
  return (
    <>
      <h1>Hello Lets learn react</h1>
      <h3>counter: {count}</h3>
      <button onClick={addvalue}>clickme {count}</button>
      <br />
      <button onClick={removevalue}>to-reduce {count}</button>
      <footer>{count}</footer>
    </>
  );
}

export default App;
