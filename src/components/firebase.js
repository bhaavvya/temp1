// Import the functions you need from the SDKs you need
import { getApp,getApps,initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUy6X_Cl5ErNIt5NXIRPEgdxya1ff9w98",
  authDomain: "tuning-4a5ee.firebaseapp.com",
  projectId: "tuning-4a5ee",
  storageBucket: "tuning-4a5ee.appspot.com",
  messagingSenderId: "1069455325595",
  appId: "1:1069455325595:web:d723ca2d86ac6e6e0c893e",
  measurementId: "G-L64G0JTTTB"
};
// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export default app;