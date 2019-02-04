import React from "react";

const SearchBox = ({ onSearch, searchField }) => {
  const inputStyle = {
    width: "300px",
    borderRadius: "10px"
  };
  return (
    <form className="pa2 tc">
      <label className="robot-search-label" htmlFor="robot">
        Robofriend search:{" "}
      </label>
      <input
        className="pa3 ba b--green bg-lightest-blue tc"
        name="robot"
        type="text"
        placeholder="Search for your robofriend"
        style={inputStyle}
        onChange={onSearch}
      />
    </form>
  );
};

export default SearchBox;
