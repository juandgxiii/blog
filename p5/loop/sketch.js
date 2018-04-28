function setup() {
  createCanvas(600, 400);
  // frameRate(10);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  var x = 25 + frameCount % 50;
  while (x <= width){
      y = 25;
      while (y <= height) {
        ellipse(x, y, 25);
      y += 50;
    }
    x += 50;
  }
}
