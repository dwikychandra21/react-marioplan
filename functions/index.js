const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(res => console.log("notification added", res));
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
      status: 'unread'
    };

    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
        const newUser = doc.data();
        console.log(newUser);
        
        const notification = {
            content: "Joined the party",
            user: `${newUser.name}`,
            time: admin.firestore.FieldValue.serverTimestamp(),
            status: 'unread'
        }

        return createNotification(notification);
    });
});
