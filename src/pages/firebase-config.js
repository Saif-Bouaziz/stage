import { initializeApp } from "firebase/app"; 

//  Our app will use auth from firebase
import {getAuth} from "firebase/auth"

// yet7awlou fi .env.local
const firebaseConfig = {
  apiKey: "AIzaSyCzC613ouW-LLy8dy5RwFpUy_duzNosbDw",
  authDomain: "test-auth-a963d.firebaseapp.com",
  projectId: "test-auth-a963d",
  storageBucket: "test-auth-a963d.appspot.com",
  messagingSenderId: "250369796040",
  appId: "1:250369796040:web:3e09e27ce32118a33042fd"
};

// Initialize the connexion between firebase and our project
const app = initializeApp(firebaseConfig); 
 
export const auth = getAuth(app)