import React from "react";
import { Redirect, Route } from "react-router-dom";
import {useHistory} from "react-router-dom";
const ProtectedRoute = ({ loggedIn, component: Component, ...rest}) => {
  const history = useHistory();
  return (
    <Route
    {...rest}
      render={() => (loggedIn ? <Component history={history} /> : <Redirect to="/login" />)}
    />
  );
};

export default ProtectedRoute;
//<ProtectedRoute path="/news/" loggedIn={this.state.loggedInStatus} component={News}/>