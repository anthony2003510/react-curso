import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting.jsx";
import Product, { Navbar } from "./Product.jsx";
import {Button} from "./Button.jsx"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Button text = 'click me'/>
    <Button text = 'dont click me'/>
    <Button text = 'please mate'/>
    <Button text = 'please mate DONT CLICK ME'/>
    {/* <UserCard
      name="Anthony Wesley"
      amount={3000}
      married={false}
      points={[99, 33.3, 22.2]}
      adress={{ street: "123 Main Streer", city: "New York" }}
      greet ={function (){ alert('Casssssiopia')}}
    />

    <UserCard
      name="Iré Regla"
      amount={2000}
      married={true}
      points={[100,200]}
      adress={{ street: "123 Main Street", city: "New York" }}
      greet ={function (){ alert('Casssssiopia')}}
    /> */}


  </>
);
