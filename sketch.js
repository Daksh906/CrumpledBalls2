var line1,line2,line3;
var ball,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   

	dustbin1 = new Dustbin(500,675,200,20);
	

	dustbin2 = new Dustbin(410,625,20,100);
	
	dustbin3 = new Dustbin(590,625,20,100);
	
	paper1 = new Paper(50,10,30);
	ground1  = new Ground(400,690,800,20)

	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  
 paper1.display();
 ground1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:135,y:-130});
	}
}



