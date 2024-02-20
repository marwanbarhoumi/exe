import { useState } from "react";
import "./App.css";
import CardList from "./Component/ListCar";

function App() {
  const boys = [
    {
      name: "marwan",
      age: 25,
      phone: 54500264,
    },
    {
      name: "jalol",
      age: 45,
      phone: 97648340,
    },
    {
      name: "mohamed",
      age: 57,
      phone: 52679530,
    },
  ];
  const girls = [
    {
      name: "chayma",
      age: 25,
      phone: 54500264,
    },
    {
      name: "marwa",
      age: 45,
      phone: 97648340,
    },
    {
      name: "esra",
      age: 20,
      phone: 52679530,
    },
  ];

  return (
    <div className="App">
      <h1>Boys</h1>
      <CardList list={boys} />
      <h1>girls</h1>
      <CardList list={girls} color="red" />
    </div>
  );
}

export default App;
