function signup(){
  auth.createUserWithEmailAndPassword(email.value, password.value)
    .then(()=>location.href="index.html")
    .catch(e=>alert(e.message));
}

function login(){
  auth.signInWithEmailAndPassword(email.value, password.value)
    .then(()=>location.href="index.html")
    .catch(e=>alert(e.message));
}

auth.onAuthStateChanged(user=>{
  if(!user && location.pathname.includes("admin")){
    location.href="login.html";
  }
});

