import React, { useState } from "react";
import { connect } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

import { createProject } from "../../store/actions/project";

const CreateProject = props => {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const firestore = useFirestore();
  const {auth} = props;

  if(!auth.uid && auth.isLoaded) return <Redirect to="/login" />;

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onCreateProject(firestore, formData);
    props.history.push('/');
  };

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create New Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Post</button>
        </div>
      </form>
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
    onCreateProject: (firestore, formData) =>
      dispatch(createProject(firestore, formData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
