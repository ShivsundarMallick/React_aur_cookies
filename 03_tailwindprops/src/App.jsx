import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  // objects and arrays cannot dirctly written in the component
  let myObj = {
    name: "shiv",
    age: 21,
  };

  let myarr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-indigo-500 text-white p-4 rounded-xl mb-2">
        Tailwind Test
      </h1>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-2">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full mx-auto"
          src="https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It's easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
      <Card personname="jackliii" someobj={myObj} someArray={myarr} btnText ="click me"/>
      <Card personname="woooha" someobj={myObj} someArray={myarr} />
    </>
  );
}

export default App;
