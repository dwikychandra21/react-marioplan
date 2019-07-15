import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

const projectDetail = props => {
    const { project } = props;

    if(project) {
        return (
            <div className="container project-detail">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <p>Posted by {project.authorName}</p>
                        <p>{moment(project.createdAt.toDate()).calendar()}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="materialize center">
                Loading...
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps)=> {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(projectDetail);