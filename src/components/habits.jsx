import React from "react";
import Habit from "./habit";
import HabitAddFrom from "./habitAddForm"

class Habits extends React.Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelite = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  
  render() {
    return (
      <>
      <HabitAddFrom onAdd={this.handleAdd}/>
        <ul>
          {this.props.habits.map(habit => (
            <Habit 
            key={habit.id} 
            habit={habit}
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            onDelete={this.handleDelite} 
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Habits;