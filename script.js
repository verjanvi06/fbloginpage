function test() {
  var id = document.getElementById("email").value;
  var pw = document.getElementById("psw").value;

  var user = localStorage.setItem("id", id);
  var pass = localStorage.setItem("pw", pw);

  var userdata = localStorage.getItem("id", id);
  var userpass = localStorage.getItem("pw", pw);

  var a, b;

  a = "janvi06@gmail.com";
  b = "moon05";

  if (a == userdata && b == userpass) {
    alert("Login Successful");
  } else {
    alert("Invalid Details");
  }
}
