var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var shftphrase;
var inpt;
var flag = 0;
var li = [];
var li2 = [];
var fin;
var flag2 = 0;
var qaz = 0;
var flag3 = 0;
var opT33 = document.getElementsByClassName("opt33");
var kybord = document.getElementsByClassName("kybrd");

var x = new Audio('fixu.mp3');
setInterval(poor, 1000);

function poor(){
  if ($(window).width() < 960) {
    x.play();
    
  }
  else{
    x.pause();
    x.currentTime = 0;
  }
}

for (let i = 0; i < kybord.length; i++) {
  kybord[i].addEventListener('click', function () {
    inpt = kybord[i].value;
    for (let m=0; m < kybord.length; m++){
      kybord[m].style.color = 'black';
    }
    // shftphrase = document.getElementById("shft").value;
    var rotVals = document.getElementsByClassName("rotvals");
    var shft = [];
    var history = document.getElementById("hist");
    var histx = '';

    for (let g=0; g < rotVals.length; g++){
      if (rotVals[g].value == ''){
        alert("Rotor Positions Are Void \nPlease Input Rotor Positions");
        console.log("running");
        qaz += 1;
        break
      }
      console.log("rotval: "+rotVals[g].value);
      histx += rotVals[g].value + ' ';
      console.log(histx);
      shft.push(parseInt(rotVals[g].value));
      console.log(shft);
    }
    if(!(histx == '') && flag3 == 0){
      history.innerHTML += 'Positions: '+histx+'<br><br>';
      flag3 += 1;
    }
    
    if (qaz == 0){
    console.log(inpt);
    kybord[i].style.color = 'blue';
    magik(inpt, shft, fin);
    }
    qaz = 0;
  })
}

var clr = document.getElementById("clear");
clr.addEventListener("click", clear);
function clear(){
  var rotVals = document.getElementsByClassName("rotvals");
  var first1 = document.getElementById("first");
  var last1 = document.getElementById("last");
  flag3 = 0;
  first1.innerHTML = '';
  last1.innerHTML = '';
  for (let i=0; i < rotVals.length; i++){
    rotVals[i].value = '';
    opT33[i].innerHTML = '';
  }
}

function magik(inpt, shft, fin) {
  if (flag2 == 0){
    for (let i = 0; i < shft.length; i++) {
      li.push(parseInt(shft[i]));
      console.log('shift: ' + li);
    }
  }
  flag2 += 1;
  console.log("li: " + li);

  for (let i = 0; i < inpt.length; i++) {
    var first1 = document.getElementById("first");
    first1.innerHTML += inpt[i];
    li2.push((alphabet.indexOf(inpt[i])));
    console.log('inpt: ' + li2);
  }
  console.log("li2: " + li2);
  for (let i = 0; i < li2.length; i++) {
    while (flag < 2) {
      console.log("what flag? " + flag);
      for (let j = 0; j < li.length; j++) {
        li2[i] = ((li2[i] + li[j]) % 26);
        console.log("now: " + li);
        console.log("li2: "+li2);
      }
      for (let k = 0; k < li.length; k++) {
        li[k] = li[k] + 1;
        }
        console.log("line71");
      for (let q=0; q < li.length; q++){
        console.log('line73');
        opT33[q].innerHTML = li[q] % 26;
      }
      flag++;
    }
    fin = alphabet[li2[i]];
    console.log("this pos: " + li2);
    console.log("this letter: " + alphabet[li2[i]]);
    flag = 0;
  }
  for (let i=0; i < kybord.length; i++){
    if (kybord[i].value == fin){
      kybord[i].style.color = 'red';
    }
  }
  console.log("final: " + fin);
  var last1 = document.getElementById("last");
  last1.innerHTML += fin;
  li2 = [];
}