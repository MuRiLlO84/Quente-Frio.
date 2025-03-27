let x;
let y;

function setup() {
  createCanvas(400, 400);
  
  textSize(20)
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background("orange");
  
  x = x + random(-2,2);
  y = y + random(-2,2);
  x = constrain(x,0,400)
  y = constrain(y,0,400)
  
  let distancia;
  distancia = dist(mouseX,mouseY,x,y);
  circle(mouseX,mouseY,distancia);
  
  if(distancia > 80){
    fill("purple")
  }
 if(distancia < 80){
    fill("green")
  }
  
  if (distancia<3) {
      text('Bom dia!',200,200);
      noLoop();
      }
}
