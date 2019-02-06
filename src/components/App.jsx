import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./Searchbox";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
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
