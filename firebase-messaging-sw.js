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

const channel = new BroadcastChannel('sw-messages');

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
    channel.postMessage(
              payload
            );
//    const notificationTitle = payload.notification.title;
//    const notificationOptions = {
//      body: payload.notification.body,
//    };
//
//    self.registration.showNotification(notificationTitle,
//      notificationOptions);

//      const promiseChain = clients
//              .matchAll({
//                  type: "window",
//                  includeUncontrolled: true
//              })
//              .then(windowClients => {
//                  for (let i = 0; i < windowClients.length; i++) {
//                      const windowClient = windowClients[i];
//                      windowClient.postMessage(payload);
//                  }
//              })
//              .then(() => {
//              const notificationTitle = payload.notification.title;
//                  const notificationOptions = {
//                    body: payload.notification.body,
//                  };
//
//                  return registration.showNotification(notificationTitle,
//                                             notificationOptions);
//              });
//          return promiseChain;

  });
//messaging.setBackgroundMessageHandler(function (payload) {
//    const promiseChain = clients
//        .matchAll({
//            type: "window",
//            includeUncontrolled: true
//        })
//        .then(windowClients => {
//            for (let i = 0; i < windowClients.length; i++) {
//                const windowClient = windowClients[i];
//                windowClient.postMessage(payload);
//            }
//        })
//        .then(() => {
//            return registration.showNotification("New Message");
//        });
//    return promiseChain;
//});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)

    event.notification.close();
    if(event.data != null){
    channel.postMessage(
          event.notification.data
        );
    }
    let url = event.notification.action;
      event.waitUntil(
        clients.matchAll({ type: "window" }).then(windowClients => {
          // Check if there is already a window/tab open with the target URL
          for (var i = 0; i < windowClients.length; i++) {
            var client = windowClients[i];
            // If so, just focus it.
            if (client.url === url && "focus" in client) {
              return client.focus();
            }
          }
          // If not, then open the target URL in a new window/tab.
          if (clients.openWindow) {
            return clients.openWindow(url);
          }
        })
      );

//      // Get all the Window clients
//      event.waitUntil(clients.matchAll({ type: 'window' }).then(clientsArr => {
//        // If a Window tab matching the targeted URL already exists, focus that;
//        const hadWindowToFocus = clientsArr.some(windowClient => windowClient.url === event.notification.data.click_action ? (windowClient.focus(), true) : false);
//        // Otherwise, open a new tab to the applicable URL and focus it.
//        if (!hadWindowToFocus) clients.openWindow(event.notification.action).then(windowClient => windowClient ? windowClient.focus() : null);
//      }));
});

//self.addEventListener('notificationclick', handleClick);