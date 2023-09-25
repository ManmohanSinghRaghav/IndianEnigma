<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBiA14JqQJSk3daALRYgad44dlj_oxP55Y",
    authDomain: "sihiii.firebaseapp.com",
    projectId: "sihiii",
    storageBucket: "sihiii.appspot.com",
    messagingSenderId: "840315908245",
    appId: "1:840315908245:web:7da37470c895be131eab9c",
    measurementId: "G-57W7NWCVX0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>