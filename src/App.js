import React, { useState } from "react";
import sample from "./sample.json";
import "./App.css";

function App() {
  const localAray = sample;
  const [search, setsearch] = useState("");

  return (
    <div className="App">
      <input
        placeholder="Search...."
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <br />

      <br />
      {localAray
        .filter((val) => {
          if (search === "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return val;
          }
        })
        .map(({ id, first_name }) => {
          return <p key={id}>{first_name}</p>;
        })}
    </div>
  );
}

export default App;
