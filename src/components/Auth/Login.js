import React, { useState } from "react";
import { connect } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

import { login } from "../../store/actions/auth";

const Login = props => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const firebase = useFirebase();

  console.log('you in login');
  

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onLogin(firebase, formData);
  };

  const { auth } = props;
  const { isLoaded } = auth;
  let signInContent = null;
  
  if (isLoaded) {
    if (auth.uid) {
      signInContent = <Redirect to="/" />;
    } else {
      signInContent = (
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Login</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      );
    }
  } 

  return (
    <div className="container" >
        {signInContent}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (firebase, credentials) => dispatch(login(firebase, credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
