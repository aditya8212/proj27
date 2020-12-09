
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1,chain1,bob1,bob2,bob3,bob4,bob5,chain2;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	roof1 = new ROOF();
	bob1 = new BOB(230);
	bob2 = new BOB(280);
	bob3 = new BOB(330);
	bob4 = new BOB(380);
  bob5 = new BOB(430);
  bob6 = new BOB(480);

	chain1 = new CHAIN1(bob1.body,roof1.roof,-150,0);
	chain2 = new CHAIN1(bob2.body,roof1.roof,-90,0);
	chain3 = new CHAIN1(bob3.body,roof1.roof,-30,0);
	chain4 = new CHAIN1(bob4.body,roof1.roof,30,0);
  chain5 = new CHAIN1(bob5.body,roof1.roof,90,0);
  chain6 = new CHAIN1(bob6.body,roof1.roof,150,0);

}

function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
 
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();
}

function keyPressed(){
if(keyDown("up")){

Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1,y:0});

}
}