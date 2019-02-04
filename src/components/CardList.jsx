import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
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
