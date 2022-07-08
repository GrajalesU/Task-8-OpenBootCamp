import React from "react";
import LoginContainer from "../containers/LoginContainer";
import TodosContainer from "../containers/TodoContainer";
import TodoFormContainer from "../containers/TodoFormContainer";

const Root = ({ loged }) => {
  return (
    <div>
      {!loged && <LoginContainer />}
      <TodosContainer />
      {loged && <TodoFormContainer />}
    </div>
  );
};

export default Root;
