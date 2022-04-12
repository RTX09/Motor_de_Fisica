// Criar namespace

// m�dulos da biblioteca

const Engine = Matter.Engine;
// mundo onde adiciono os objetos criados
const World = Matter.World;
// os objetos que s�o adicionados ao mundo
const Bodies = Matter.Bodies;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
// raio
var radius = 20;


function setup() {

  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);

  World.add(world,ground);
  
  var ball_options = {
    // elasticidade
    restituition: 0.95,
    // atrito do ar
    frictionAir: 0.01
  }

  ball = Bodies.circle(100, 10, radius, ball_options);
  World.add(world, ball);
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("black");

  Engine.update(engine);
 
  ellipse(ball.position.x, ball.position.y, radius);
    rect(ground.position.x, ground.position.y, 400,20);
}

