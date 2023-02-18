import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting.jsx";
import Product, { Navbar } from "./Product.jsx";
import {Button} from "./Button.jsx"
import {TaskCard} from './Task.jsx'
import {Saludar} from './Saludar.jsx'
import {Posts} from './Posts.jsx'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
      <Posts />
  </>
);
