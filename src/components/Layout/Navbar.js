import React from "react";

import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const navbar = props => {
  const { auth, profile } = props;
  const { isLoaded } = auth;

  let links = null;

  if (isLoaded) {
    if (auth.uid) {
      links = <SignedInLinks profile={profile} />;
    } else {
      links = <SignedOutLinks />;
    }
  }

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(navbar);
