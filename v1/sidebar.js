var openBtn = document.getElementById("sdbrBtn");

openBtn.addEventListener("click", openSesame);

var clsbtn = document.getElementById("clsBtn");

clsbtn.addEventListener("click", bai);

function openSesame() {
  document.getElementById("mySidebar").style.width = "250px";
}

function bai() {
  document.getElementById("mySidebar").style.width = "0";
}