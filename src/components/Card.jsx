import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src="https://robohash.org/alan?200x200" alt="robot-photo" />
        <h2>Jane Doe</h2>
        <p>jane.doe@gmail.com</p>
      </div>
    );
  }
}

export default Card;
