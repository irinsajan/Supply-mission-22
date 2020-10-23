const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var groundSprite, helicopterSprite, packageSprite;
var helicopterImage, packageImage;

var engine, world, packageBody, ground;

function preload(){
	helicopterImage = loadImage("helicopter.png");
	packageImage = loadImage("package.png");
}

function setup(){
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(400,680,800,20,{isStatic:true});
	World.add(world,ground);

	groundSprite = createSprite(400,680,800,20);

	packageBody = Bodies.circle(400,120,5,{restitution:0.4,isStatic:true});
	World.add(world,packageBody);

	packageSprite = createSprite(400,120,5,5);
	packageSprite.addImage(packageImage);
	packageSprite.scale = 0.1;

	helicopterSprite = createSprite(400,100,100,50);
	helicopterSprite.addImage(helicopterImage);
	helicopterSprite.scale = 0.6;

	

	
}

function draw(){
	background(0);
	
	Engine.update(engine);
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;

	groundSprite.x = ground.position.x;
	groundSprite.y = ground.position.y;

	if (keyDown("down")){
		Matter.Body.setStatic(packageBody,false);
	}
	drawSprites();
}