var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var line1,line2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 line1 = new box(430,height-45,200,10);
	 line2 = new box(530,height-90,10,100);
	 line3 = new box(320,height-90,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  line1.display(); 
  line2.display(); 
  line3.display(); 
  helicopterSprite.visible = false;
  packageSprite.visible = false;
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}




