//AÑADE TUS ENLACES DE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyAzWuzLZukz0ePkaU-SULN_VrMxo8Fcs1s",
  authDomain: "patito-brabo.firebaseapp.com",
  databaseURL: "https://patito-brabo-default-rtdb.firebaseio.com/",
  projectId: "patito-brabo",
  storageBucket: "patito-brabo.appspot.com",
  messagingSenderId: "748894521113",
  appId: "1:748894521113:web:3a1548fe93315f243be788"
};
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");

 document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";
 
 function addRoom()
 {
   room_name = document.getElementById("room_name").value;
 
   firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
   });
 
     localStorage.setItem("room_name", room_name);
     
     window.location = "kwitter_page.html";
 }
 
 function getData() { 
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
     });
   });
 
 }
 
 getData();
 
 function redirectToRoomName(name)
 {
   console.log(name);
   localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
 }
 
 
 function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
     window.location = "index.html";
 }
 
 /*user_name = localStorage.getItem("user_name");

 document.getElementById("user_name").innerHTML = "¡Hola "+ user_name +"!";
 function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding user"
  });
  localStorage.setItem("room_name",room_name);

  window.location ="kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("hola1")
   //Inicio del código
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id);' >#" + Room_names + "</div><hr>"
document.getElementById("output").innerHTML += row;
//Final del código
   });});}
getData();
function redirectToRoomName(name){
  console.log("hola")
  localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
  window.location="index.html"
}*/