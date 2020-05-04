var GameState;
var Play = 0;
var launch  = 1;
var tank,shooter,ground,Canon;
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;


function setup() {
   
createCanvas(600,600);
engine = Engine.create();
    world = engine.world;


Canon = new canon();
World.add(world,Canon);

tank = new Tanker();
World.add(world,tank);


ground = new Ground();
World.add(world,ground);
}

function draw() {
    background(220);


Engine.update(engine);
Canon.display();
tank.display();
ground.display();

}
function keyReleased() {
}