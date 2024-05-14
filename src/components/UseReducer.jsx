import React, { useReducer } from "react";

const initialState = {
  tasks: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, { text: action.payload, isToggled: false }],
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload
            ? { ...task, isToggled: !task.isToggled }
            : task
        ),
      };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const handleToggleTask = (index) => {
    dispatch({ type: "TOGGLE_TASK", payload: index });
  };

  return (
    <div>
      <input
        type="text"
        onKeyPress={(e) => e.key === "Enter" && handleAddTask(e.target.value)}
      />
      <ul>
        {state.tasks.map((task, index) => (
          <li key={index}>
            {task.isToggled ? "The content is hidden" : task.text}
            <button onClick={() => handleToggleTask(index)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducer;
