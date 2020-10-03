import React from 'react';

function SimpleHabit(props) {
  // state = {
  //   count: 0,
  // };
  const [count, setCount] = React.useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (<li className="habit">
  <span className="habit-name">Reading</span>
  <span className="habit-count">{count}</span>
  <button
    className="habit-button habit-increase"
    onClick={handleIncrement}
  >
    <i className="fas fa-plus-square"></i>
  </button>
</li>
);
}

export default SimpleHabit;
