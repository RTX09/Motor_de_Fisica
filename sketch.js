// Criar namespace

// módulos da biblioteca

const Engine = Matter.Engine;
// mundo onde adiciono os objetos criados
const World = Matter.World;
// os objetos que são adicionados ao mundo
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
}

