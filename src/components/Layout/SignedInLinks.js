import React from 'react';
import { connect } from "react-redux";
import { useFirebase } from "react-redux-firebase";

import { NavLink } from "react-router-dom";
import { logout } from "../../store/actions/auth";

const SignedInLinks = props => {
    const firebase = useFirebase();

    return (
        <ul className="right">
            <li><NavLink to="/create">Create Project</NavLink></li>
            <li><a onClick={() => props.onLogout(firebase)}>Logout</a></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: (firebase) => dispatch(logout(firebase))
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);