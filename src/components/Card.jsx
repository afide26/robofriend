import React from "react";

const Card = props => {
  const { name, username, email } = props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${username}?200x200`} alt={username} />
      <h2>{name}</h2>
      <h3>{username}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;
