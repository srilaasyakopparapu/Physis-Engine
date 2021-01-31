const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies 
var engine, world 
var object1
var ground
var ball

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var blue = {
    restitution: 1.2
  }
  object1 = Bodies.rectangle(400, 200, 30, 30, blue)
  World.add(world, object1)
  var green = {
    isStatic:true
  }
  ground = Bodies.rectangle(400, 360, 800, 30, green)
  World.add(world, ground)
  ball = Bodies.circle(300, 200, 20)
  World.add(world, ball)
}

function draw() {
  background("blue"); 
  Engine.update(engine)
  rectMode(CENTER)
rect(object1.position.x, object1.position.y, 30, 30);
rect(ground.position.x, ground.position.y, 800, 30);
ellipseMode(RADIUS)
ellipse(ball.position.x, ball.position.y, 20);
  drawSprites();
}