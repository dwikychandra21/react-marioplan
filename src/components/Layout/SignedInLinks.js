import React from 'react';

import { NavLink } from "react-router-dom";

const signedInLinks = props => {
    return (
        <ul className="right">
            <li><NavLink to="/create">Create Project</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">DC</NavLink></li>
        </ul>
    )
}

export default signedInLinks;