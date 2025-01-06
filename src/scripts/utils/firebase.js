import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAhABJUAkTOJmnCbsoyKpKMnDZDRGiWS9o",
  authDomain: "story-app-bea57.firebaseapp.com",
  projectId: "story-app-bea57",
  storageBucket: "story-app-bea57.firebasestorage.app",
  messagingSenderId: "28038230132",
  appId: "1:28038230132:web:4ee9a4d098249b8d51e121",
  measurementId: "G-FCR657HWFB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };