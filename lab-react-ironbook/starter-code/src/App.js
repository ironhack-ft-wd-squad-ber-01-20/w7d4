import React from "react";
import "./App.css";
import usersJSON from "./users.json";
import Users from "./Users";
class App extends React.Component {
  state = {
    users: usersJSON.map((el, i) => ({ ...el, id: i })),
    search: "",
    student: true,
    teacher: true,
    campus: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
    });
  };

  render() {
    const search = this.state.search.toLowerCase();

    const users = this.state.users.filter(user => {
      return (
        ((this.state.student && user.role === "student") ||
          (this.state.teacher && user.role === "teacher")) &&
        (user.firstName.toLowerCase().includes(search) ||
          user.lastName.toLowerCase().includes(search)) &&
        (this.state.campus === user.campus || !this.state.campus)
      );
    });

    return (
      <div className="App">
        <h1>IronBook</h1>
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.handleChange}
          placeholder="search by name"
        />
        <br />
        <label htmlFor="student">Student</label>
        <input
          type="checkbox"
          name="student"
          id="student"
          onChange={this.handleChange}
          checked={this.state.student}
        />
        <label htmlFor="teacher">Teacher</label>
        <input
          type="checkbox"
          name="teacher"
          id="teacher"
          onChange={this.handleChange}
          checked={this.state.teacher}
        />
        <label htmlFor="campus">Campus</label>
        <select
          name="campus"
          id="campus"
          value={this.state.campus}
          onChange={this.handleChange}
        >
          <option value="">--</option>
          <option value="Berlin">Berlin</option>
          <option value="Lisbon">Lisbon</option>
          <option value="Paris">Paris</option>
        </select>
        <Users users={users} />
      </div>
    );
  }
}

export default App;
