// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq8y7qCDbC4y8syjNK4KYoWEXFv6G8TcY",
  authDomain: "assignment-react-firevase10.firebaseapp.com",
  projectId: "assignment-react-firevase10",
  storageBucket: "assignment-react-firevase10.appspot.com",
  messagingSenderId: "71248007161",
  appId: "1:71248007161:web:a5af7e6c841a705b053728"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export default auth;