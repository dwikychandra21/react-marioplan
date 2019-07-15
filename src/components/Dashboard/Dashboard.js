import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

import ProjectList from "../Projects/ProjectLists";
import Notifications from "./Notifications";

const Dashboard = props => { 
    const { auth, notifications, profile } = props;
    
    if(!auth.uid && auth.isLoaded) return <Redirect to="/login" />;
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={props.projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} username={profile.name} />
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    projects: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications,
    profile: state.firebase.profile
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ['createdAt', 'desc'] },
    { collection: "notifications", limit: 5, orderBy: ['time', 'desc'] }
  ])
)(Dashboard);
