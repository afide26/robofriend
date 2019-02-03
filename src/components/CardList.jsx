import React from "react";
import { robots } from "../services/robots";
import Card from "./Card";

const CardList = () => {
  const robotsList = robots.map(robot => (
    <Card
      key={robot.id}
      username={robot.username}
      name={robot.name}
      email={robot.email}
    />
  ));
  return robotsList;
};

export default CardList;
