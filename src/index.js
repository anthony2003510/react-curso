import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting.jsx";
import Product, { Navbar } from "./Product.jsx";
import {Button} from "./Button.jsx"
import {TaskCard} from './Task.jsx'
import {Saludar} from './Saludar.jsx'
import {Posts} from './Posts.jsx'
const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter()
{
  const [mensaje, setMensaje] = useState()
  const [counter, setCounter] = useState(0)

  useEffect(()=>
  {
    console.log('render')
  },[counter])

  //useEffect solo se ejecutará en el momento que counter cambie su valor, en la array se especifica que queremos "trackear" para que el useEffect se ejecute.
  return (
    <>
     <div>
      <input onChange={(e)=>
        {
          setMensaje(e.target.value)
        }}/>
      <button onClick={()=>
        {
          alert('el mensaje es ' + mensaje)
        }}>Save</button>


        <hr />
        <hr/>


        <h1>Counter : {counter}</h1>
        <button onClick={()=>
          {
            setCounter(counter +1)
          }}>Sumar</button>

        <button onClick={()=>
          {
            setCounter(counter - 1)
          }}>Restar</button>


        <button onClick={()=>
          {
            setCounter(0)
          }}>Reiniciar</button>
     </div>
    </>
  )
}

root.render(
  <>
  <Counter />
  </>
);
