var choices = document.getElementsByName("selectEcrpt");
var outpt = document.getElementById("output2");
var a1div = document.getElementById("a1");
var a2div = document.getElementById("a2");
var a3div = document.getElementById("a3");
var a4div = document.getElementById("a4");
var lttrPick;
var cipherPck = "";
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
var csrout = "";
var vigList = [];
var csrout2 = "";
var numbers = ['1','2','3','4','5','6','7','8','9'];
console.log("running here as well 2234");
//b:i:7 o:s:4 B:t:18 _:_:7 i:p:7 s:w:4 _:_:18 g:n:7 o:v:7 a:e:4 t:l:18
a1div.style.display="none";
a2div.style.display="none";
a3div.style.display="none";
a4div.style.display="none";

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
main();

function main(){
  
  function caesarMagic(inpt, shftkey, nameGive){
    for(let i=0; i < inpt.length; i++){
      console.log("here too");
      if(!(inpt[i] == ' ')){
        lttrPick = alphabet.indexOf(inpt[i])+1;
      }
      else{
        lttrPick = 0;
      }
      console.log("lttrPick: "+lttrPick);
      shftkey = parseFloat(shftkey);
      if((lttrPick + shftkey) >= 25){
        lttrPick = (lttrPick + shftkey) % 26;
      }
      else{
        if(!(inpt[i] == ' ')){
          lttrPick = lttrPick + shftkey;
        }
        else{
          lttrPick = 26;
        }
      }

      csrout += alphabet[lttrPick];
      }
    console.log(": "+csrout);
    var optBox = document.getElementById("opt2Box");
    optBox.style.display="block";
    outpt.innerHTML = nameGive+", your encrypted message is: "+csrout;
    a3div.style.display="";
    csrout = '';
    }

  function vigenereMagic(inpt, shftphrase, nameGive, vigList){
    for (let j=0; j < shftphrase.length; j++){
      vigList.push(alphabet.indexOf(shftphrase[j])+1);
      console.log("vigList: "+vigList);
    }
    for (let i=0; i < inpt.length; i++){
      console.log('working here');
      if(!(inpt[i] == ' ')){
        lttrPick = alphabet.indexOf(inpt[i])+1;
      }
      else{
        lttrPick = 0;
      }
      console.log("lttrPick: "+lttrPick);
      
      if((lttrPick + vigList[i % (shftphrase.length)]) >= 25){
        lttrPick = (lttrPick + vigList[i % (shftphrase.length)]) % 26;
      }
      else{
        if(!(inpt[i] == ' ')){
          lttrPick = lttrPick + vigList[i % (shftphrase.length)];
        }
        else{
          lttrPick = 26;
        }
      }
      csrout2 += alphabet[lttrPick];
    }
    console.log(": "+csrout);
    var optBox = document.getElementById("opt2Box");
    optBox.style.display="block";
    outpt.innerHTML = nameGive+", your encrypted message is: "+csrout2;
    a3div.style.display="";
    csrout = '';
    csrout2 = '';
    vigList = [];
  }

  function bothCipher(inpt, shftkey, shftphrase, nameGive, vigList){
  for(let i=0; i < inpt.length; i++){
    console.log("here too");
    if(!(inpt[i] == ' ')){
      lttrPick = alphabet.indexOf(inpt[i])+1;
    }
    else{
      lttrPick = 0;
    }
    console.log("lttrPick: "+lttrPick);
    shftkey = parseFloat(shftkey);
    if((lttrPick + shftkey) >= 25){
      lttrPick = (lttrPick + shftkey) % 26;
    }
    else{
      if(!(inpt[i] == ' ')){
        lttrPick = lttrPick + shftkey;
      }
      else{
        lttrPick = 26;
      }
    }
    csrout += alphabet[lttrPick];
    console.log(csrout);
  }
  for (let j=0; j < shftphrase.length; j++){
      vigList.push(alphabet.indexOf(shftphrase[j])+1);
      console.log("vigList: "+vigList);
    }
  for (let i=0; i < csrout.length; i++){
    console.log('working here');
    if(!(csrout[i] == ' ')){
      lttrPick = alphabet.indexOf(csrout[i]);
    }
    else{
      lttrPick = 0;
    }
    console.log("lttrPick: "+lttrPick);
    
    if((lttrPick + vigList[i % (shftphrase.length)]) >= 25){
      lttrPick = (lttrPick + vigList[i % (shftphrase.length)]) % 26;
    }
    else{
      if(!(csrout[i] == ' ')){
        lttrPick = lttrPick + vigList[i % (shftphrase.length)];
      }
      else{
        lttrPick = 26;
      }
    }
    csrout2 += alphabet[lttrPick];
    console.log(csrout2);
  }
  console.log(": "+csrout);
  var optBox = document.getElementById("opt2Box");
  optBox.style.display="block";
  outpt.innerHTML = nameGive+", your encrypted message is: "+csrout2;
  a3div.style.display="";
  csrout = '';
  csrout2 = '';
  vinList = [];
}

  function step1(){
    nameGive = document.getElementById("giveNm").value;
    phrase = document.getElementById("givePhrs").value;
    errMsg = document.getElementById("errorMsg");
    if(phrase == ''){
      console.log("here 2");
      errMsg.innerHTML = "<strong>INVALID INPUT</strong>";
      a1div.style.display="none";
      a2div.style.display="none";
      a3div.style.display="none";
      a4div.style.display="none";
      return
    }
    else{
      errMsg.innerHTML = "";
    }
    phrase1 = phrase.toLowerCase();
    // console.log("phrase1: "+phrase1);

    console.log("nameGive: "+nameGive);
    console.log("phrase1: "+phrase1);
    for (let i=0; i < choices.length; i++){
      if (choices[i].checked ==true){
        if (choices[i].value == "caesar"){
          console.log("here");
          a1div.style.display="";
          a2div.style.display="none";
          a4div.style.display="none";

        }
        else if (choices[i].value == "vigenere"){
          a2div.style.display="";
          a1div.style.display="none";
          a4div.style.display="none";
        }
        else {
          a4div.style.display="";
          a1div.style.display="none";
          a2div.style.display="none";
        }
      }
    }
  }

  var mainBtn = document.getElementById("nxtStep");
  mainBtn.addEventListener("click", step1);

  var secBtn1 = document.getElementById("secStep1");
  secBtn1.addEventListener("click", function(){var csrShift = document.getElementById("shiftky").value; caesarMagic(phrase1, csrShift, nameGive); console.log("shift of: "+csrShift);});
  var secBtn2 = document.getElementById("secStep2");
  secBtn2.addEventListener("click", function(){var vgnShift = document.getElementById("shftphrs").value; vigenereMagic(phrase1, vgnShift, nameGive, vigList); console.log("shift phrase: "+vgnShift);});
  var secBtn3 = document.getElementById("secStep3");
  secBtn3.addEventListener("click", function(){var csrBshift = document.getElementById("Bshiftky").value; var vgnBshift = document.getElementById("Bshiftphrs").value; bothCipher(phrase1, csrBshift, vgnBshift, nameGive, vigList);});

  var btnClear = document.getElementById("clearBtn");
  btnClear.addEventListener("click", function(){document.getElementById("givePhrs").value=''; document.getElementById("giveNm").value=''; document.getElementById("shiftky").value=''; vgnShift = document.getElementById("shftphrs").value=''; document.getElementById("Bshiftky").value=''; document.getElementById("Bshiftphrs").value=''; a1div.style.display="none"; a2div.style.display="none"; a4div.style.display="none"; a3div.style.display="none"; var optBox = document.getElementById("opt2Box"); optBox.style.display="none"; outpt.innerHTML = '';});
}
