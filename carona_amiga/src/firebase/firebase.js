import firebase from 'react-native-firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAVqobhhMn1-bVN0WMZrGrHnDxgiumC9Fo",
    authDomain: "carona-amiga-6815b.firebaseapp.com",
    databaseURL: "https://carona-amiga-6815b.firebaseio.com",
    projectId: "carona-amiga-6815b",
    storageBucket: "carona-amiga-6815b.appspot.com",
    messagingSenderId: "346370587894",
  };


firebase.initializeApp(firebaseConfig);


export default firebase;