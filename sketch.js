const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;
var polygon, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand = new Ground(900,320,600,20);

    //level 1
    block1 = new Box(600,320,30,40);
    block2 = new Box(630,320,30,40);
    block3 = new Box(660,320,30,40);
    block4 = new Box(690,320,30,40);
    block5 = new Box(710,320,30,40);
    block6 = new Box(740,320,30,40);
    block7 = new Box(770,320,30,40);

    //level 2
    block8 = new Box(620,275,30,40);
    block9 = new Box(650,275,30,40);
    block10 = new Box(680,275,30,40);
    block11 = new Box(710,275,30,40);
    block12 = new Box(740,275,30,40);

    //level3
    block13 = new Box(650,235,30,40);
    block14 = new Box(680,235,30,40);
    block15 = new Box(710,235,30,40);

    //level4
    block16 = new Box(680,195,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:100, y:200});


}

function draw(){
    background("black");
    //Engine.update(engine);
    
    ground.display();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    slingShot.display();
}