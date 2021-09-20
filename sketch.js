const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var leftW, rightW, ground;
var bridge, jointpoint;
var jointLink;
var stones = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground = new Base(700,650,1400,20);
  leftW = new Base(50,500,100,200);
  rightW = new Base(1300,500,100,200);

  bridge = new Bridge(15, { x: width / 2 - 400, y: height / 2 });
  jointpoint = new Base(width-600,height/2+10, 40,20);

  Composite.add(bridge.body, jointpoint);
  jointLink = new Link(bridge, jointpoint);

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }
  
}

function draw() {
  background(51);
  Engine.update(engine);
  
  leftW.show();
  rightW.show();
  ground.show();
  bridge.show();

  for (var stone of stones) {
    stone.show();
  }
}
