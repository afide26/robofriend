import React from "react";

const SearchBox = () => {
  return (
    <form>
      <label htmlFor="robot">Robofriend search:</label>
      <input
        name="robot"
        type="text"
        placeholder="Search for your robofriend"
      />
    </form>
  );
};

export default SearchBox;
