import { connect } from "react-redux";
import { login } from "../../store/actions/loginActions";
import Login from "../pure/Login";

const mapStateToProps = (state) => {
  return {
    loged: state.userState.loged,
    fetching: state.userState.fetching,
    error: state.userState.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => {
      dispatch(login(email, password));
    },
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
