let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("alien.jpg");
  bg_img = loadImage("download (1).jpg");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(700,70,50,30);
  lander.addImage(lander_img);
  lander.scale = 0.5;
  
  lander2= createSprite(600,60,40,20);
  lander2.addImage(lander_img);
  lander2.scale=0.5;

  lander3= createSprite(500,50,30,10);
  lander3.addImage(lander_img);
  lander3.scale=0.5;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;
  lander2.position.y+=vy;
  lander3.position.y+=vy;
  drawSprites();
  
}


