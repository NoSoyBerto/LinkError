const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var fruit;

let engine;
let world;
var ground;
var rope;
var fruitres;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(9,{x:250,y:15});

  fruit = Bodies.circle(250,350,5);
  Matter.Composite.add(rope.body,fruit);
  //fruitres = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
  

}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  ellipse(fruit.position.x,fruit.position.y,90,50);
  
  Engine.update(engine);
  

 
   
}
