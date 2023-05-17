import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// See: https://firebase.google.com/docs/web/learn-more#config-object
// https://firebase.google.com/docs/database/web/start?hl=fr
// https://firebase.google.com/docs/web/setup?hl=fr#add-sdk-and-initialize

const firebaseConfig = {
  // TODO: Add config parameters 
  databaseURL: "https://gpt-prompt-maker-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
