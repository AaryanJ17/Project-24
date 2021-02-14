const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone, rubber


function setup() {
	createCanvas(800, 700);
	
    engine = Engine.create();
    world = engine.world;
 
    hammer = new hammer(200,300,50,50);
    rubber= Matter.Bodies.circle(100,80,20,options,0);
    stone= new stone (100,80,60,12);
    ground=new Ground(200,height,400,20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  background(0);
    Engine.update(engine);
    hammer.display();
   rubber.display();
   ground.display();
   stone.display ();
}



