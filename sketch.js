const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score=0
var groundobj,stand1,stand2,block1
var block2,block3,block4,block5,block6
var block7,block8,block9,block10
var block11,block12,block13,block14,block15,block16
var block17,block18,block19,block20,block21,block22
var block23,block24,block25,block26,block27
var block28,block29,block30
var SShot,poly
var score =0

var backgroundImg
function preload() {
getBackgroundimg()
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world= engine.world
  groundobj=new Ground(400,400,800,30)
  stand1=new Ground(400,300,400,10)
  
  poly=new Polygon(200,200)
  block2=new Block(260,275,30,40)
  block3=new Block(310,275,30,40)
  block4=new Block(360,275,30,40)
  block5=new Block(410,275,30,40)
  block6=new Block(460,275,30,40)
  block7=new Block(510,275,30,40)
  block1=new Block( 560,275,30,40)
  block8=new Block(285,235,30,40)
  block9=new Block(335,235,30,40)
  block10=new Block(385,235,30,40)
  block11=new Block(435,235,30,40)
  block12=new Block(485,235,30,40)
  block13=new Block(535,235,30,40)
  block14=new Block(335,235,30,40)
  block15=new Block(410,195,30,40)
 
  block16=new Block(460,195,30,40)
  block17=new Block(360,195,30,40)

  stand2=new Ground(700,150,300,10)
  block18=new Block(750,125,30,40)
  block19=new Block(650,125,30,40)
  block20=new Block(600,125,30,40)
  block21=new Block(700,125,30,40)
  block22=new Block(675,85,30,40)
  block23=new Block(725,85,30,40)
  block24=new Block(625,85,30,40)
  block25=new Block(700,45,30,40)
  block26=new Block(650,45,30,40)
 // block27=new Block()
  //block28=new Block()
  
  SShot=new SlingShot(poly.body,{x:100,y:200})
  Engine.run(engine);


}

function draw() {
  if(backgroundImg){
  background(backgroundImg); }

  text("SCORE:"+score,700,40) 
  groundobj.display()
  stand1.display()
  stand2.display()
  poly.display()
  block1.display()
  block1.score()
  block2.display()
  block2.score()
  block3.display()
  block3.score()
  block4.display()
  block4.score()
  block5.display()
  block5.score()
  block6.display()
  block6.score()
  block7.display()
  block7.score()
  block8.display()
  block8.score()
  block9.display()
  block9.score()
  block10.display()
  block10.score()
  block11.display()
  block11.score()
  block12.display()
  block12.score()
  block13.display()
  block13.score()
  block14.display()
  block14.score()
  block15.display()
  block15.score()
  block16.display()
  block16.score()
  block17.display()
  block17.score()
  block18.display()
  block18.score()
  block19.display()
  block19.score()
  block20.display()
  block20.score()
  block21.display()
  block21.score()
  block22.display()
  block22.score()
  block23.display()
  block23.score()
  block24.display()
  block24.score()
  block25.display()
  block25.score()
  block26.display()
  block26.score()
 // block27.display()
  //block28.display()
  drawSprites();
  keyPressed()
}
function mouseDragged() {
  Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  SShot.fly()
}
function keyPressed(){
  if(keyCode === 32){
    SShot.attach(poly.body)
  Matter.Body.setPosition(poly.body, {x: 200 , y:50 });
  }
}
async function getBackgroundimg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
 var responseJSON = await response.json();
 var datetime = responseJSON.datetime;
 var hour = datetime.slice(11,13)
 if(hour>=0600 && hour<=1900){
  bg = "m.png.jpg";
}
else{
  bg = "bg2.jpg";
}

backgroundImg = loadImage(bg);
console.log(backgroundImg);
}