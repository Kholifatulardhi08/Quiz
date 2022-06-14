import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyCWWISRSGVR2kW07ki-7lLxOcEBAFMmc8k",
    authDomain: "quiz2-2cb82.firebaseapp.com",
    projectId: "quiz2-2cb82",
    storageBucket: "quiz2-2cb82.appspot.com",
    messagingSenderId: "121811104086",
    appId: "1:121811104086:web:5c8f81ce361161db2ee6f7"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
