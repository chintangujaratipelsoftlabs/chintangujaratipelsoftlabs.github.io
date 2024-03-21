importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");
firebase.initializeApp({
    apiKey: "AIzaSyAkPqCYYcW-FSOURCjqh1JiyR8ft5IJjH8",
      authDomain: "kit19app.firebaseapp.com",
      databaseURL: "https://kit19app-default-rtdb.firebaseio.com",
      projectId: "kit19app",
      storageBucket: "kit19app.appspot.com",
      messagingSenderId: "530267574208",
      appId: "1:530267574208:web:9a8ff9541c6858cbfe4225",
      measurementId: "G-H0QTKX9G8W"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("New Message");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});