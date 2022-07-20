import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "../components/App";
import {
  getPlaceHolder,
  getDicebear,
  like,
  edit,
  deleteUser,
} from "../action/Action";

const mapStatetoProps = (state) => {
  return {
    user: state.main.dataPlaceholder,
    like: state.main.like,
    photo: state.main.dataDicebear,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return bindActionCreators(
    {
      getPlaceHolder,
      getDicebear,
      like,
      edit,
      deleteUser,
    },
    dispatch
  );
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
