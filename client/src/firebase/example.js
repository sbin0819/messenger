import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'your key',
  authDomain: 'your key',
  projectId: 'your key',
  storageBucket: 'your key',
  messagingSenderId: 'your key',
  appId: 'your key',
  measurementId: 'your key',
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;

export default firebase;
