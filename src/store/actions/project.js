export const createProject = (firestore, project) => {
  return (dispatch, getState) => {  
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('projects').add({
        ...project,
        authorName: profile.name ,
        authorID: authorId,
        createdAt: new Date()
    }).then(() => {
      dispatch({ type: "CREATE_PROJECT", project });
    }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_FAIL', err })
    })
  };
};
