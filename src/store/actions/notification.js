export const setToRead = (id, firestore) => {
    return (dispatch) => {
        console.log(firestore);
        
        firestore.collection('notifications').doc(id).update({
            status: 'read'
        })
        .then(() => dispatch({ type: 'SET_READ_NOTIF_SUCCESS' }) )
        .catch((err) => dispatch({ type: 'SET_READ_NOTIF_FAILED', err }) )
    }
}