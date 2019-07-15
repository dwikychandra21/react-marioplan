import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useFirebase, useFirestore } from "react-redux-firebase";

import { signup } from "../../store/actions/auth";

const Login = props => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const firebase = useFirebase();
  const firestore = useFirestore();

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSignUp(firebase, firestore, formData);
  };

  const { auth } = props;
  const { isLoaded } = auth;
  let signUpContent = null;

  if (isLoaded) {
    if (auth.uid) {
        signUpContent = <Redirect to="/" />;
    } else {
        signUpContent = (
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={handleChange} />
          </div>
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
        )
    }
  }

  return (
    <div className="container">
        {signUpContent}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);

  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: (firebase, firestore, formData) => dispatch(signup(firebase, firestore, formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
