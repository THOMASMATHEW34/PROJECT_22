const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here

var bob;
var bob1;
var bob2;
var bob3;
var bob4;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bob_options = {
		restitution: 0.8
	  }

	  var bob1_options = {
		restitution: 0.8
	  }

	  var bob2_options = {
		restitution: 0.8
	  }

	  var bob3_options = {
		restitution: 0.8
	  }

	  var bob4_options = {
		restitution: 0.8
	  }

	  rope1 = new rope(bob,roof,-80,0);


	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob = Bodies.circle(200,50,20,bob_options);
	World.add(world,bob);

	bob1 = Bodies.circle(210,50,20,bob1_options);
	World.add(world,bob1);

	bob2 = Bodies.circle(220,50,20,bob2_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(230,50,20,bob3_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(240,50,20,bob4_options);
	World.add(world,bob4);

	

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  
  rope1.display();
 

  
  //create ellipse shape for multiple bobs here
  ellipse(bob.position.x,bob.position.y,20);
  ellipse(bob1.position.x,bob1.position.y,20);
  ellipse(bob2.position.x,bob2.position.y,20);
  ellipse(bob3.position.x,bob3.position.y,20);
  ellipse(bob4.position.x,bob4.position.y,20);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(bob,{x:0,y:0},{x:0.05,y:0});
    }
}
