//Sliding intro
const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAsc1gMfrBV4TIBjd7zKDBoULX9SdqHGVs",
    authDomain: "journeyman-website.firebaseapp.com",
    projectId: "journeyman-website",
    storageBucket: "journeyman-website.appspot.com",
    messagingSenderId: "794929930758",
    appId: "1:794929930758:web:c877b9d60f184f526cd987",
    measurementId: "G-7C73C5NR1N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//listening for contact submission
document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e) {
    e.preventDefault();

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let interest = document.querySelector(".interest").value;
    let message = document.querySelector(".message").value;

    save(name, email, interest, message);
}