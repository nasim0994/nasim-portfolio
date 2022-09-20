var a;
function showHide() {
  if (a == 1) {
    document.querySelector(".headerManu").style.display = "block";
    return (a = 0);
  } else {
    document.querySelector(".headerManu").style.display = "none";
    return (a = 1);
  }
}

document.getElementById("contact-btn").addEventListener("click", function () {
  const name = document.getElementById("name-filed");
  const email = document.getElementById("email-filed");
  const subject = document.getElementById("subject-filed");
  const message = document.getElementById("message-filed");
  //Name:
  if (name.value) {
    name.value = "";
  } else {
    alert("Please Enter your Name");
  }
  //Email:
  if (email.value) {
    email.value = "";
  } else {
    alert("Please Enter your Email Address");
  }
  //Subject:
  if (subject.value) {
    subject.value = "";
  } else {
    alert("Please Enter your subject");
  }
  //Message:
  if (message.value) {
    message.value = "";
  } else {
    alert("Please Enter your Message");
  }
});
