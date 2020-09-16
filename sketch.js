
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render
var ground,d1,d2,d3,p;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,650,900,10);
d1= new Dustbin(650,635,200,20);
d2= new Dustbin(540,590,20,110);
d3= new Dustbin(740,590,20,110);
p= new Ball(200,620,60,60);
 render = Render.create({
   element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  p.display();


if (keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
}



  drawSprites();
 
}



