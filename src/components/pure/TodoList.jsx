import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick, loged }) => {
  return (
    <div>
      <h1>To Do</h1>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onClick={() => {
              loged && onTodoClick(todo.id);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  loged: PropTypes.bool.isRequired,
};

export default TodoList;
