import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBDRyPUZMNLHXI_-vkojYcAt5BLzECynY0",
    authDomain: "jiapei-react-todo-78312.firebaseapp.com",
    databaseURL: "https://jiapei-react-todo-78312.firebaseio.com",
    storageBucket: "jiapei-react-todo-78312.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Andrew',
        age: 25
    }
});
