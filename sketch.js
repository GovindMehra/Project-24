const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper;

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    paper = new Paper(100,355,15);
    ground = new Ground(600,380,1200,20);
    leftbody = new Ground(755,325,20,50);
    middlebody = new Ground(800,360,80,20);
    rightbody = new Ground(845,325,20,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  leftbody.display();
  rightbody.display();
  middlebody.display();
  paper.display();
  drawSprites();
 
}
function keyPressed()
{
  if(keyCode === 32 )
  {-
    Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:100});
  }
}


