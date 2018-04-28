var ball = {
  x: 300,
  y: 200,
  xspeed: 2,
  yspeed: 3,
  diam: 24
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  ellipse(ball.x, ball.y, ball.diam, ball.diam);

  if (ball.x >= width - ball.diam/2 || ball.x <= ball.diam/2) {
    ball.xspeed = -ball.xspeed;
    console.log(ball.x, ball.y);
  }
  if (ball.y >= height - ball.diam/2 || ball.y <= ball.diam/2) {
    ball.yspeed = -ball.yspeed;
    console.log(ball.x, ball.y);
  }
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
}
