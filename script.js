
/* VARIABLES */
let catcher, fallingObject, monster;
let score = 0; 
let catcherImg;
let fallingObjectImg; 
let screen = 0
let enterButton


/* PRELOAD LOADS FILES */
function preload(){
  catcherImg = loadImage("assets/runningRightOut.png");
  fallingObjectImg = loadImage("assets/book1.png");

}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(00,100);
  fill ("green")
  textSize
  //Resize images
  catcherImg.resize(50,0); 
  fallingObjectImg.resize(45,0)

   
  //Create catcher 
  catcher = new Sprite(catcherImg, 200,340,100,30, "k");
  catcher.color = color(95,158,160);
  
  //Create falling object 
  fallingObject = new Sprite(fallingObjectImg, 100,0,10);
  fallingObject.color = color(0,128,128);
  fallingObject.vel.y = 2; 
  fallingObject.rotationLock = true; 



}

/* DRAW LOOP REPEATS */
function draw() {

  
  // Draw storyline to screen
  fill("white");
  textSize(13);
  textAlign(CENTER);
  background("black")
  text("Your friend needs 20 books asap! help her not fail her next exam!", 200, 80);

  //If fallingObject, monster, or star reaches bottom, move back to random position at top. 
  if(fallingObject.y >= height){
    fallingObject.y = 0;
    fallingObject.x = random(width);
    fallingObject.vel.y = random(1,7);
    score--;
  }

  

  //Move catcher
  if(kb.pressing("left")){
    catcher.vel.x = -3; 
  }
  else if(kb.pressing("right")){
    catcher.vel.x = 3; 
  }
  else{
    catcher.vel.x = 0; 
  }
  if(kb.pressing("up")){
    catcher.vel.y = -3; 
  }
  else if(kb.pressing("down")){
    catcher.vel.y = 3; 
  }
  else{
    catcher.vel.y = 0; 
  }


  //Stop catcher at edges of screen
  if(catcher.x < 50){
    catcher.x = 50; 
  }
  else if(catcher.x > 1000){
    catcher.x = 1000; 
  }
  if(catcher.y < 10)
    catcher.y = 10;

  if(catcher.y < 5)
    catcher.y = 5;
  
  //If fallingObject, monster, or star collides with catcher, move back to random position at top (except for star)
  if(fallingObject.collides(catcher)){
    fallingObject.y = 0; 
    fallingObject.x = random(width);
    fallingObject.vel.y = random(1,8);
    fallingObject.direction = "down";
    score += 1; 
  }


  //Displays score
  text("Books collected: " + score, 70, 30);

  //If player reaches score of at least five and has captured star
  if(score >= 20){
    good();
    if(mouseIsPressed){
      restart();
    }

function good(){
    fallingObject.y = 15; 

  fill('green');
  text("Through your help, you were able\n to keep your friend postive \n among difficult study times. \n She was able to use your books to ace her tests!", width / 2, height/2);
} 
  }
}
