// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyA3r472eGELenIsHFSI0yWEst8MgM34iXw",
    authDomain: "ipmedt4---beweegminuut.firebaseapp.com",
    projectId: "ipmedt4---beweegminuut",
    storageBucket: "ipmedt4---beweegminuut.appspot.com",
    messagingSenderId: "343314335987",
    appId: "1:343314335987:web:4b19050b93d8055749cf86",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});