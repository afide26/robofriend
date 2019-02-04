import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./Searchbox";
import { robots } from "../services/robots";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: robots,
      searchField: ""
    };
  }

  componentDidMount() {
    this.setState({ robots });
  }

  handleOnSearchChange = e => {
    e.preventDefault();

    this.setState({ searchField: e.target.value });
  };
  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(
      robot =>
        robot.name.toLowerCase().includes(searchField.toLowerCase()) ||
        robot.username.toLowerCase().includes(searchField.toLowerCase()) ||
        robot.email.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <React.Fragment>
        <h1 className="tc sega-title">Robofriends</h1>
        <SearchBox
          onSearch={this.handleOnSearchChange}
          searchField={this.state.searchField}
        />
        <div className="tc">
          <CardList robots={filteredRobots} searchField={searchField} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
