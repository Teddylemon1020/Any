<script src="https://www.gstatic.com/firebasejs/9.x.x/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.x.x/firebase-firestore.js"></script>
//for html

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
  // Initialize Firestore
  const db = firebase.firestore();
  
  <form id="dataForm">
  <input type="text" id="name" placeholder="Enter your name" />
  <input type="number" id="age" placeholder="Enter your age" />
  <button type="submit">Submit</button>
</form>

document.getElementById("dataForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
    
    // Get values from form
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    
    // Add data to Firestore
    db.collection("users").add({
      name: name,
      age: parseInt(age)
    })
    .then(() => {
      console.log("Data successfully added!");
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  });
  