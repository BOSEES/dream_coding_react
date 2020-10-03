import React from "react";

class Habit extends React.PureComponent {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit)
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit)
  };

  handleDelite = () => {
    this.props.onDelete(this.props.habit)
  }
  render() {
    const { name } = this.props.habit;
    const { count } = this.props;
    return (
      <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={this.handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete" onClick={this.handleDelite}>
        <i className="fas fa-trash"></i>
      </button>
      </li>
      );
  }
}

export default Habit;