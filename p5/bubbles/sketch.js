let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i=0; i<20; i++) {
    let x = random(width);
    let y = random(height);
    bubbles[i] = new Bubble(x,y,random(10,20));
  }
}

function draw() {
  background(0);
  for (let bubble of bubbles) {
    bubble.show();
    bubble.move();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r*2);
  }
}
