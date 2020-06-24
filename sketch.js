const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var width = width;
var particles = []
var plinkos = []
var divisions = []
var divisionheight = 300



function setup() {
	createCanvas(480, 800);
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);


	floor = new Ground(230,790,500,20);

	for(var k=0; k <= width; k= k + 80){
		divisions.push(new Divisions(k,height-divisionheight/2,10,divisionheight));
	}
	
	for(var j = 40; j <=width;j=j+50){
		plinkos.push(new plinko(j,75));
	}
	
	for(var j = 15; j <= width;j=j+50){
		plinkos.push(new plinko(j,175));
	}
	
	
	
	
	
	
}


function draw() {
  background(0);
  Engine.update(engine);
  floor.display();
   
  for(var i=0;i<plinkos.length;i++){
	  plinkos[i].display()
  }



  if(frameCount%90===0){
	particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}
  
for(var j = 0; j<particles.length;j++){
	particles[j].display();
}

 for(var k=0; k<divisions.length;k++){
	 divisions[k].display();
 }

drawSprites();
 
}



