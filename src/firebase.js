import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDleUMoH5QqRQgW5GmYdcqI5g6m4CPhF0I",
  authDomain: "tiktok-clone-3d3f9.firebaseapp.com",
  projectId: "tiktok-clone-3d3f9",
  storageBucket: "tiktok-clone-3d3f9.appspot.com",
  messagingSenderId: "888755775946",
  appId: "1:888755775946:web:082523966eb381077ec733"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;