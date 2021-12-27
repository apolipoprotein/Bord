
var screen = 0;
var bally = -20;
var ballx= 200;
var score = 0;
var ballspeed = 2;

var xDir = 200; 

var label="";

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

function setup() {
  createCanvas(760, 520);
}

function draw() {
  if (screen ==0){
    startScreen()
  }
  else if (screen == 1){
    gameScreen()
  }
  else if (screen ==2){
    endScreen()
  }
}

function startScreen(){
  background(58, 201, 192);
  fill(227, 137, 0);
  textSize(30);
  textAlign(CENTER);
  text("Catch the Cookies", width/2, height/2);
  text("Click to start getting Cookies", width/2, height/2 +30);
  reset();
}

function gameScreen(){
  background(0, 121, 107);
  fill(100, 0, 0);
  
  textSize(15);
  text('Cookies: ' + score, 40, 15);
  text(label, width / 2, height - 4);
  
  //player - bucket
  fill(255);
  rectMode(CENTER)
  rect(xDir, height-50, 50, 30);
  
  document.addEventListener('keydown', function(event) {
    if (event.key == "ArrowLeft"){
        label = "Left";
    }
    else if(event.key == "ArrowRight"){
      label = "Right";
    }
    
  });
  document.addEventListener('keyup', function(event) {
    if (event.key == "ArrowLeft"){
        label = "";
    }
    else if(event.key == "ArrowRight"){
      label = "";
    }
    
  });

  if (label == "Left"){
    xDir -= 7;
  }
  
  if (label == "Right"){
    xDir += 7;
  }
  
  
  ellipse(ballx, bally, 20, 20);
  
  bally += ballspeed;
  
  if (bally > height){
    screen  = 2;
  }
  
  if (bally>height-50 && ballx > xDir-20 && ballx < xDir+20){
    bally = -20
    ballspeed += 0.5
    score += 1
  }
  
  //picking a random x=spot to "drop" the ball 
  if (bally == -20){
    ballx = random(20, width-20)
  }
  
  
}

function endScreen(){
  background(230, 230, 0);
  fill(255, 0, 250);
  textSize(30);
  textAlign(CENTER);
  if (score == 0){
    text("Cookies: " + score, width/2, height/2);
    text("You There?", width/2, height/2+30);
  }
  else if (score ==1) {
    text("YOU DROPPED THE COOKIE", width/2, height/2);
    text("Cookies: " + score, width/2, height/2+30);
  }
  else if(score > 1) {
    text("YOU DROPPED THE COOKIES", width/2, height/2);
    text("Cookies: " + score, width/2, height/2+30);
  }
}

function mousePressed(){
  if (screen == 0){
    screen  =1;
  }
  else if (screen ==2){
    screen = 0;
  }
}

function reset() {
  bally = -20;
  score = 0;
  ballspeed = 2;
}