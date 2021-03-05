import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'contactbook-a14fe.firebaseapp.com',
  projectId: 'contactbook-a14fe',
  storageBucket: 'contactbook-a14fe.appspot.com',
  messagingSenderId: '778314507767',
  appId: process.env.FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
