
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var tree,ground,stone;
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5;
var slingshot;

function preload()
{
	boyImage=loadImage("images/Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(850,400,500,500);
	
	ground=new Ground(400,650,1600,50);
	stone=new Stone(150,500,40,40)
	boy=createSprite(200,550,5,5);
	boy.scale=0.1
	boy.addImage(boyImage)

	mango1=new Mango(900,220,50,50)
	mango2=new Mango(700,300,50,50)
	mango3=new Mango(800,350,50,50)
	mango4=new Mango(1000,300,50,50)
	mango5=new Mango(850,300,50,50)

	slingshot=new SlingShot(stone.body,{x:150,y:500})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingshot.display()

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  

  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:500})
		slingshot.attach(stone.body)
	}
}

function detectCollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false)
	}

}