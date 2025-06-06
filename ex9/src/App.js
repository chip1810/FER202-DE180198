// src/App.js
import React from "react";
import NameCard from "./NameCard";
import SimpleCard from "./SimpleCard";
import SimpleWebsite from "./SimpleWebsite";

function App() {
  return (
    <div className="container mt-4">
      <h2>Bài 1: Name and Message</h2>
      <NameCard />

      <h2 className="mt-5">Bài 2: Simple Card</h2>
      <SimpleCard />

      <h2 className="mt-5">Bài 3: Simple Website</h2>
      <SimpleWebsite />
    </div>
  );
}

export default App;
