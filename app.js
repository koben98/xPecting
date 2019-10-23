

(function() {
  const firebaseConfig = {
    apiKey: "AIzaSyDvd_eoDzq1G8Gq24zurY5JudX99c4Rhu0",
    authDomain: "maternityhealthcaremodel.firebaseapp.com",
    databaseURL: "https://maternityhealthcaremodel.firebaseio.com",
    projectId: "maternityhealthcaremodel",
    storageBucket: "maternityhealthcaremodel.appspot.com",
    messagingSenderId: "169817253026",
    appId: "1:169817253026:web:753512b7881dbad4f963fb",
    measurementId: "G-NFGGJ0XLXF"
  };
  
  firebase.initializeApp(firebaseConfig);

  // Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');
  const motherRadio = document.getElementById('mother');
  const midWifeRadio = document.getElementById('midwife');
  const doctor = document.getElementById('doctor');

  // Add login event
  btnLogin.addEventListener('click', e => {
    // get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    var user = firebase.auth().currentUser;
    if(user) {
      firebase.auth().signOut();
    }
    
    const promise = firebase.auth().signInWithEmailAndPassword(email, pass);  
    promise.catch(e=> document.getElementById("loginFailed").innerHTML = 'Login Failed!<br>Please confirm you entered the correct email address and password');
    
  });

  btnSignup.addEventListener('click', e => {
    // get email and password
    // Todo: check for real email
    const email = txtEmail.value;
    const pass = txtPassword.value;
    
    const promise = firebase.auth().createUserWithEmailAndPassword(email, pass);
    promise.catch(e=> console.log(e.message));

  });

  // Add realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      if (motherRadio.checked) {
      window.location = 'mother.html';
      } else if(midWifeRadio.checked) {
        window.location = 'midwife.html';
      } else if(doctor.checked) {
        window.location = 'homepage.html';
      } else {
        console.log('choose role');
      }
      console.log('logged in');
      
    } else {
      console.log('not logged in');

    }

  });

}());



  