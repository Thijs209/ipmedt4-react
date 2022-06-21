import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";


var firebaseConfig = {
    apiKey: "AIzaSyA3r472eGELenIsHFSI0yWEst8MgM34iXw",
    authDomain: "ipmedt4---beweegminuut.firebaseapp.com",

    projectId: "ipmedt4---beweegminuut",
    storageBucket: "ipmedt4---beweegminuut.appspot.com",
    messagingSenderId: "343314335987",
    appId: "1:343314335987:web:4b19050b93d8055749cf86",

};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);


export const fetchToken = (setTokenFound) => {
    return getToken(messaging, {vapidKey: 'AAAAT-8hCPM:APA91bEMPYj32xOwixISbHDb-VU_6WBkSur8GrbJLyPZ8ywskCRiNFX8eu8YdxhOtz-mzTcBJAzhEiHEUOFQmYQu824AV0DwbG5dKQ2Mq7KeHNpJRmWNtvW0yhhOv4j85KsuzKB_aHgB'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
}

