export const login = (firebase, credentials) => {
    return (dispatch) => {
        console.log(firebase);
        
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((res) => {
            dispatch({ type: 'LOGIN_SUCCESS', res });
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err });
        })
    }
}

export const logout = (firebase) => {
    return dispatch => {
        dispatch({ type: 'LOGOUT_START' });
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' });
        })
    }
}

export const signup = (firebase, firestore, formData) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(
            formData.email,
            formData.password
        ).then(res => {   
            
            const arrayName = formData.name.split(' ');
            const arrayLength = arrayName.length;
            const lastInitials = arrayLength > 1 ? arrayName[1][0] : '';
            return firestore.collection('users').doc(res.user.uid).set({
                name: formData.name,
                initials: arrayName[0][0] + lastInitials
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_FAILED', err })
        })
    }
}