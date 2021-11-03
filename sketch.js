
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbinObj, paperObject,groundObject;	
var engine,world;


function setup() {
	createCanvas(1530, 700);

	engine = Engine.create();
	world = engine.world;
  groundObject = new ground(800, 690, 1600, 20);
  paperObject = new paper(100, 650, 60);
  dustbinObj = new dustbin(1400, 660);
}
 

function draw() {

  background("skyblue");
  Engine.update(engine);
  groundObject.display();
  paperObject.display();
  dustbinObj.display();
}

function keyPressed(){
    if(keyCode === 32 ){
      Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:910, y:-900})
     
    }
}


