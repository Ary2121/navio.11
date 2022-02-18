
function preload(){
mar=loadImage("sea.png")
barquinho=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")

}

function setup(){
  createCanvas(400,400);
fundo=createSprite(200,200 )
fundo.addImage(mar)
fundo.scale=0.5
barco=createSprite (200,200)
barco.addAnimation("barquinho",barquinho)
barco.scale=0.3
}

function draw() {
  background("blue");
  fundo.velocityX= -7
  if (fundo.x < 0){
  fundo.x= fundo.width/5;
  }
    drawSprites();

 
}
