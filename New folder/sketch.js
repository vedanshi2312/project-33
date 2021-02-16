const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var stand1, stand2, stand3, stand4, stand5, stand6, stand7;
//var particles = [];
var plinkos = [];
var particles=[];
var particle;
var gameState="play";
var count=0;
var score=0;
//var particle;
function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 780, 1200, 10);

  stand1 = new Division(10, 680, 10, 200);
  stand2 = new Division(80, 680, 10, 200);
  stand3 = new Division(170, 680, 10, 200);
  stand4 = new Division(250, 680, 10, 200);
  stand5 = new Division(330, 680, 10, 200);
  stand6 = new Division(410, 680, 10, 200);
  stand7 = new Division(475, 680, 10, 200);
  stand8 = new Division(555, 680, 10, 200);
  stand9 = new Division(635, 680, 10, 200);
  stand10 = new Division(715, 680, 10, 200);
  stand11 = new Division(790, 680, 10, 200);
  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175,10));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375,10));
     
  }

  

  
  
}

function draw() {
   
   background("black")
  
   Engine.update(engine);
   
   ground.display();
   
   stand1.display();
   stand2.display();
   stand3.display();
   stand4.display();
   stand5.display();
   stand6.display();
   stand7.display();
   stand8.display();
   stand9.display();
   stand10.display();
   stand11.display();
   //particles.display();
   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
 }
 
     if(particle!=null)
  {
   
     particle.display();
      
  if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                 if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                 if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                   particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
   //     mousePressed();
      }
      text("Your Score: "+score,200,200)
      text("guess your score!!",200,230)

  }
  function mousePressed()
{
  if(gameState!=="end")
{
  particle=new Particle(mouseX, 10, 10); 
   particle.display();
      count++;
     
     
}
}
  
 


