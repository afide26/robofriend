import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./Searchbox";
import { robots } from "../services/robots";
const App = () => {
  return (
    <React.Fragment>
      <h1 className="tc">Robofriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </React.Fragment>
  );
};

export default App;
