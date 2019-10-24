//Handling TypeWriter
var t1 = 0;
var txt1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of the type and scrambled it to make a type specimen book.";

var t2 = 0;
var txt2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as apposed to using 'Content here, content here'.";

var speed1 = 10;
function typeWriter1() {
  if (t1 < txt1.length) {
    document.getElementById("text1").innerHTML += txt1.charAt(t1);
    t1++;
  } else if (t2 < txt2.length) {
    document.getElementById("text2").innerHTML += txt2.charAt(t2);
    t2++;
  }
  setTimeout(typeWriter1, speed1);
}

var a1 = 0;
var txt_age = "19 years old";

var p1 = 0;
var txt_phone = "+62-8527-7220-615"

var e1 = 0;
var txt_email = "red.nix45@gmail.com"

var speed2 = 80;
function typeWriter2() {
  if (a1 < txt_age.length) {
    document.getElementById("age").innerHTML += txt_age.charAt(a1);
    a1++;
  } else if (p1 < txt_phone.length) {
    document.getElementById("phone").innerHTML += txt_phone.charAt(p1);
    p1++;
  } else if (e1 < txt_email.length) {
    document.getElementById("email").innerHTML += txt_email.charAt(e1);
    e1++;
  }
  setTimeout(typeWriter2, speed2);
}


//Handling Login Validate
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "admin") {
    window.location.href = "My_Website.html";
    alert("Login Success !");
    return false;
  }
  else {
    alert("Username or Password is Wrong !");
    window.location.reload(true);
  }
}


//Handling Redirect Images
function redirect_github() {
  window.location.href = "https://github.com/anonym26?tab=repositories";
}

function redirect_linkedIn() {
  window.location.href = "https://www.linkedin.com/in/rezky-simanjuntak-5a7398187/";
}

function redirect_twitter() {
  window.location.href = "https://twitter.com/rezkyjuntak_";
}


//Handling Redirect to Login Page
function return_back() {
  window.location.href = "Login.html";
}