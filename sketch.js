const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myWorld;
var myEngine;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

myEngine = Engine.create();
// my world is my engines world.
myWorld = myEngine.world 
//json
var groundOptions = {
  isStatic : true 
}
ground = Bodies.rectangle(200,380,400,20,groundOptions);
World.add(myWorld,ground);
console.log(ground.isStatic);

//json
var ballOptions = {
  restitution : 1.0 
}
ball = Bodies.circle(200,200,25);
World.add(myWorld,ball);
//console.log(ball);
}

function draw() {
  background("black");  
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20);
 // rect (200,200,50,50);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,25,25); 

 //drawSprites();
}