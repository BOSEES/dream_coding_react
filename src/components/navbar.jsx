import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <i className="navbar-logo fas fa-cannabis"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;