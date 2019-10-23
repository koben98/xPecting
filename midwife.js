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
  const btnLogout = document.getElementById('btnLogout');
  const addUser = document.getElementById('addUser');
  const updateUser = document.getElementById('updateUser');
  const searchUser = document.getElementById('searchUser');
  const firstSearch = document.getElementById('firstSearch');
  const lastSearch = document.getElementById('lastSearch');
  

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    console.log('user signed out');
    window.location = 'index.html';
    
  });

  searchUser.addEventListener('click', e => {
    var userId = firstSearch.value + lastSearch.value;
    firebase.firestore().collection('Patients').get().then(snapshot => {
      snapshot.forEach(doc => {
        if (userId === doc.id) {
          firebase.firestore().collection('Patients').get().then(snapshot => {
                document.getElementById('resTitle').innerHTML = "Patient Result";
            var html = '';
                html += "<br>";
                html += "First name: " + doc.data().firstName + "<br>";
                html += "Last name: " + doc.data().lastName + "<br>";
                html += "Date of birth: " + doc.data().dateOfBirth + "<br>";
                html += "Height: " + doc.data().height + "<br>";
                html += "Weight: " + doc.data().weight + "<br>";
                html += "Parity: " + doc.data().numberOfPregnancies + "<br>";
                html += "Last Menstruation Date: " + doc.data().gestationalAge + "<br>";
                html += "Condition: " + doc.data().condition + "<br>";
                html += "Prescriptions: " + doc.data().prescription + "<br>";
                html += "Next Appointment: " + doc.data().nextApt + "<br>";
                html += "Comments: " + doc.data().comments + "<br>";
                html += "<br>";
                document.getElementById('users').innerHTML = html;
                //TODO: Access collection Revisit
                //^ DONE
                var html1 = '';
                firebase.firestore().collection('Patients').doc(userId).collection('Revisit').get().then(snapshot => {
                  snapshot.forEach(doc => {
                
                    html1 += "<b>Revisits</b>:<br>";
                    html1 += "Date: " + doc.id + "<br>";
                    html1 += "New Weight: " + doc.data().weightSecond + "<br>";
                    html1 += "Abdominal Perimeter: " + doc.data().diameter + "<br>";
                    html1 += "Uterine Height: " + doc.data().uterheight + "<br>";
                    html1 += "BP: " + doc.data().bloodpressure + "<br>";
                    html1 += "HR: " + doc.data().heartrate + "<br>";
                    html1 += "RR: " + doc.data().resprate + "<br>";
                    html1 += "Temperature: " + doc.data().temperature + "<br>";
                    html1 += "Fetal Heart Rate: " + doc.data().fetalhr + "<br>";
                    html1 += "Lab Tests: " + doc.data().lab + "<br>";
                    html1 += "Vaccines: " + doc.data().vaccines + "<br>";
                    html1 += "Symptoms: " + doc.data().symptoms + "<br>";
                    html1 += "Prescription: " + doc.data().prescription + "<br>";
                    html1 += "Comments: " + doc.data().comments + "<br>";                
                  })
                  document.getElementById('rev').innerHTML = html1;
                });

          });
        } else {
          document.getElementById('resTitle').innerHTML = "Patient not found";
          document.getElementById('users').innerHTML = "";
          document.getElementById('rev').innerHTML = "";
        }
         
      });
      
  });

  });

  updateUser.addEventListener('click', e => {
    console.log('user id after found' + userId);
    var userId = firstSearch.value + lastSearch.value;
    firebase.firestore().collection('Patients').get().then(snapshot => {
      snapshot.forEach(doc => {
        if (userId === doc.id) {
          window.location = 'formRevisitMidwife.html';
        } else {
          document.getElementById('users').innerHTML = "Patient not found";
    }})})});
    
}());