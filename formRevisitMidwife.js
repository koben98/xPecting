(function () {

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

  var db = firebase.firestore();

  var submit = document.getElementById('submitSecond');
  var goback = document.getElementById('goBack');
  const firstName = document.getElementById('firstNameRe');
  const lastName = document.getElementById('lastNameRe');
  const visitDate = document.getElementById('visitDate');
//formRevisit will create a subcollection that contains all visits to the doctors
//while maintaining the initial information of the patient
submit.addEventListener('click', e => {
  var ref = db.collection("Patients").doc(firstName.value + lastName.value).collection("Revisit").doc(document.getElementById('visitDate').value);
  var setWithMerge = ref.set({
      weightSecond: document.getElementById('weight2').value,
      diameter: document.getElementById('diameter').value,
      uterheight: document.getElementById('uterheight').value,
      bloodpressure: document.getElementById('bp').value,
      heartrate: document.getElementById('hr').value,
      resprate: document.getElementById('rr').value,
      temperature: document.getElementById('temperature').value,
      fetalhr: document.getElementById('fetalhr').value,
      lab: document.getElementById('lab').value,
      vaccines: document.getElementById('vaccines').value,
      symptoms: document.getElementById('symptoms').value,
      prescription: document.getElementById('prescription').value,
      nextApt: document.getElementById('nextApt').value,
      comments: document.getElementById('comments').value,
    }, { merge: true });
    
})

  goback.addEventListener('click', e => {
    window.location = 'midwife.html';
  })


}());