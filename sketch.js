var Cat,Cat_image1,Cat_image2,Cat_image3,Cat_image4;
var Rat,Rat_image1,Rat_image2,Rat_image3,Rat_image4

var Garden,Garden_image;


function preload() {
    //load the images here
Cat_image1 = loadAnimation("images/cat1.png")
Cat_image2 = loadAnimation("images/cat2.png","images/cat3.png")

Cat_image4 = loadAnimation("images/cat4.png")

Garden_image = loadImage("images/garden.png")

Rat_image1 = loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png")
Rat_image2=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
  Garden = createSprite(500,400,30,30);
  Garden.addImage(Garden_image)

  Cat = createSprite(700,580,20,20);
  Cat.addAnimation("Cat1",Cat_image1);
  Cat.scale = 0.18;
  Cat.velocityX=0;

  Rat = createSprite(200,580,10,10);
  Rat.addAnimation("Rat1",Rat_image1);
  Rat.scale = 0.2;
Cat.debug=  true;
Rat.debug = true;

Cat.setCollider("rectangle",10,30);
Rat.setCollider("rectangle",10,30)

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(Cat.x - Rat.x < (Cat.width - Rat.width)/2)
    {
      Cat.velocityX = 0;
      
  
      Cat.addAnimation("CatLastimg",Cat_image4)
      Cat.changeAnimation("CatLastimg");
  
    }
  



    drawSprites();


}


function keyPressed(){

  //For moving and changing animation write code here

  
  if(keyCode === LEFT_ARROW)
  {
    Cat.velocityX = -5;
    Cat.addAnimation("catRunning",Cat_image2);
    Cat.changeAnimation("catRunning")


  }

  
}
