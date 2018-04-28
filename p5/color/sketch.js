function setup() {
  createCanvas(500, 500);
}

function draw() {
  backcolor = map(abs(mouseX - width/2), 0, 250, 0, 255);
  background(backcolor);
  ellipseMode(CENTER);
  rectMode(CENTER);

  fill(255);

  //Body
  rect(240, 145, 20, 100);

  //Head
  ellipse(240, 115, 60, 60);

  //Eyes
  ellipse(221, 115, 16, 32);
  ellipse(259, 115, 16, 32);

  //Legs
  line(230, 195, 220, 205);
  line(250, 195, 260, 205);
}
