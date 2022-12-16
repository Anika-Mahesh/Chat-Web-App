// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCW4y9Vw9c5TAcEtIbsnpLxTd_MIpOkgr4",
    authDomain: "chat-web-app-bf19d.firebaseapp.com",
    databaseURL: "https://chat-web-app-bf19d-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-bf19d",
    storageBucket: "chat-web-app-bf19d.appspot.com",
    messagingSenderId: "800057059772",
    appId: "1:800057059772:web:283ae8b4bc7ec26fd4a3b9"
  };
  
  // Initialize Firebase

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}



