var l = true;
var h = 500;
var w = 758;

function setup() {
  createCanvas(w, h);
  frameRate(20);
}

function draw() {
  noStroke();
  r();
}

function mouseClicked(){
  if (l) {
    noLoop();
    console.log('paused');
  } else {
    loop();
    console.log('resumed');
  }
  l = !l;
  return false;
}

function r(){
  rectSize = 10;
  for (i=0; i<w/rectSize; i++){
    for (j=0; j<h/rectSize; j++){
      fill(random(50, 230));
      rect(i*rectSize, j*rectSize, rectSize, rectSize);
    }
  }
}
