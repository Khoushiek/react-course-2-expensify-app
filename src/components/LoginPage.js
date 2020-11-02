import React from "react";
import {connect} from "react-redux";
import {startLoginWithGoogle, startLoginWithFacebook} from "../action/auth";

export const LoginPage = ({startLoginWithGoogle, startLoginWithFacebook}) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify App</h1>
        <p className="box-layout__text">You can manage all your daily expenses here</p>
        <button className="box-layout__button" onClick={startLoginWithGoogle}>Login with Google</button>
        <p className="para-text">or</p>
        <button className="box-layout__button" onClick={startLoginWithFacebook}>Login with Facebook</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
  }
};

export default connect(undefined, mapDispatchToProps)(LoginPage);