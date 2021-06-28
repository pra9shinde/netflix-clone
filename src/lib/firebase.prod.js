import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDYPW_OdlLle2G8qTMUCijE5CEYwyHGVd4',
    authDomain: 'shindeflix.firebaseapp.com',
    projectId: 'shindeflix',
    storageBucket: 'shindeflix.appspot.com',
    messagingSenderId: '636978494701',
    appId: '1:636978494701:web:5bb6d57fb6b310e27b20e4',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
