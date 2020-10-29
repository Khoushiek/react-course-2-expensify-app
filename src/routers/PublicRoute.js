import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Header from "../components/Header";

export const PublicRoute = ({
  isAuthenticated,
	component: Component,
	...rest
  }) => (
  <Route component={(props) => (
    !isAuthenticated ? (
      <div>
        <Component {...props}/>
      </div>
    )
     : ( 
       <Redirect to='/dashboard' />
     )
  )}/>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);