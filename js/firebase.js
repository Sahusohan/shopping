const firebaseConfig = {
 apiKey: "AIzaSyAisU7STb4UAJmcpuFtvp520OrX0of-THI",
  authDomain: "anonymousconfession-19707.firebaseapp.com",
  projectId: "anonymousconfession-19707",
};

firebase.initializeApp(firebaseConfig);

window.auth = firebase.auth();
window.db = firebase.firestore();
