import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBDRyPUZMNLHXI_-vkojYcAt5BLzECynY0",
        authDomain: "jiapei-react-todo-78312.firebaseapp.com",
        databaseURL: "https://jiapei-react-todo-78312.firebaseio.com",
        storageBucket: "jiapei-react-todo-78312.appspot.com",
    };

    firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
