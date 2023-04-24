// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANKld7dPQTHbzuhGApxO034XGhJscOLJc",
  authDomain: "fir-auth-4a08f.firebaseapp.com",
  projectId: "fir-auth-4a08f",
  storageBucket: "fir-auth-4a08f.appspot.com",
  messagingSenderId: "162933296261",
  appId: "1:162933296261:web:1476009fa5cfe4830badec"
};

// Initialize Firebase
let app;
if(firebase.apps.length ===0){
    app =initializeApp(firebaseConfig);
}else {
    app = firebase.app()
}
const auth =firebase.auth()
export{auth};
