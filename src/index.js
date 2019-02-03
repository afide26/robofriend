import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./components/Card";
import "tachyons";
import { robots } from "./services/robots";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div>
    <Card
      id={robots[0].id}
      name={robots[0].name}
      email={robots[0].email}
      username={robots[0].username}
    />
    <Card
      id={robots[1].id}
      name={robots[1].name}
      email={robots[1].email}
      username={robots[1].username}
    />
    <Card
      id={robots[2].id}
      name={robots[2].name}
      email={robots[2].email}
      username={robots[2].username}
    />
    <Card
      id={robots[3].id}
      name={robots[3].name}
      email={robots[3].email}
      username={robots[3].username}
    />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
