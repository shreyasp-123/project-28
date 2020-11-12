
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var boyImg;
function preload()
{
	boyImg = loadImage("Images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(65, 500, 30)

	tree = new Tree(600, 400, 400, 500)

	ground = new Ground(400, 650, 800, 5)

	mango1 = new Mango(500, 375, 30)
	mango2 = new Mango(600, 225, 30)
	mango3 = new Mango(700, 250, 30)
	mango4 = new Mango(640, 300, 30)
	mango5 = new Mango(710, 335, 30)

	sling = new Sling(stone.body, {x:83, y: 515})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boyImg, 50, 450, 150, 250)
  stone.display();
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  sling.display();

  detectcollision(stone, mango1)
  detectcollision(stone, mango2)
  detectcollision(stone, mango3)
  detectcollision(stone, mango4)
  detectcollision(stone, mango5)
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectcollision(lstone, lmango){
	mbody = lmango.body.position
	sbody = lstone.body.position

	var distance = dist(sbody.x, sbody.y, mbody.x, mbody.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false)
	}
}