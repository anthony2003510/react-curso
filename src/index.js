import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting.jsx";
import Product, { Navbar } from "./Product.jsx";
import {Button} from "./Button.jsx"
import {TaskCard} from './Task.jsx'
import {Saludar} from './Saludar.jsx'
import {Posts} from './Posts.jsx'
const root = ReactDOM.createRoot(document.getElementById("root"));

const userarray = [
  {
    name : "joe",
    secondname : "macmillan",
    imagen: 'https://robohash.org/user1'
  },
  
  {
    name : "Anthony",
    secondname : "Rodriguez",
    imagen: 'https://robohash.org/user2'
  },

  {
    name : "Iré",
    secondname : "Regla",
    imagen: 'https://robohash.org/user3'
  }
]

root.render(
  <>
      {userarray.map((user, i)=>{
        return <div  key={i}>
          <h1>{user.name}</h1>
          <img src={user.imagen}/>
        </div>
      })}
  </>
);
