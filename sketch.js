var bgImg;
var catImg1;
var mouseImg1;
var catImg2;
var mouseImg2;
var cat;
var mouse ;
var catImg3;
var mouseImg3;
var catImg4;
var mouseImg4;
var bg;



function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png");
    mouseImg2 = loadAnimation("images/mouse2.png");
    catImg3 = loadAnimation("images/cat3.png");
    mouseImg3 = loadAnimation("images/mouse3.png");
    catImg4 = loadAnimation("images/cat4.png");
    mouseImg4 = loadAnimation("images/mouse4.png");

    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    var cat = createSprite(870 , 600);
    cat.addAnimation("catImg1");
    cat.scale = 0.2;

    var mouse = createSprite( 200 , 600);
    mouse.addAnimation("mouseImg1");
    mouse.scale = 0.15;
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x = mouse.x < (cat.width - mouse.width)/2){
        
        cat.addAnimation("images/cat4.png" , cat4Img);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("images/cat4.png");

        mouse.addAnimation("images/mouse4.png" , mouse4Img);
        mouse.scale = 0.15;
        mouse.changeAnimation("image/mouse4.png");

    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   
  if(keyCode === RIGHT_ARROW){

    cat.addAnimation("catRunning" , catImg2,);
    cat.changeAnimation("catRunning");
    cat.frameDelay = 25;

  }

  if(keyCode === LEFT_ARROW){
    
    mouse.addAnimation("mouseTeasing" , mouseImg2,);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

  }

}
