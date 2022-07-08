import { connect } from "react-redux";
import Root from "../pure/Root";

const mapStateToProps = (state) => {
  return {
    loged: state.userState.loged,
  };
};

const mapDispatchToProps = (dispatch) => {
  //Not necessary
};

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root);

export default RootContainer;
