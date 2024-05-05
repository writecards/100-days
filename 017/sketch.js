function preload() {
  BOX_WIDTH = 1083;
  BOX_HEIGHT = 1457;
  BOX_DEPTH = 345;
  FRONT_IMG = loadImage('front.png');
  LEFT_IMG = loadImage('left.png');
  TOP_IMG = loadImage('top.png');
  RIGHT_IMG = loadImage('right.png');
  BOTTOM_IMG = loadImage('bottom.png');
  BACK_IMG = loadImage('back.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // Make sure the box always fit the screen.
  SCALE_FACTOR = windowHeight / 2 /
      Math.max(Math.max(BOX_WIDTH, BOX_HEIGHT), BOX_DEPTH);
  
}

function drawFaceBox(boxWidth, boxHeight, boxDepth,
    front, top, right, bottom, left, back) {
  angleMode(DEGREES); 
  // let w = boxWidth * SCALE_FACTOR;
  // let h = boxHeight * SCALE_FACTOR;
  // let d = boxDepth * SCALE_FACTOR;
    let w = 300;
  let h =300;
  let d = 300;

  // Center the box.
  translate(-w / 2, -h / 2);

  texture(front);
  quad(0, 0, w, 0, w, h, 0, h);

  push();
  texture(left);
  translate(0, 0, -d);
  rotateY(-90);
  stroke(255)

  quad(0, 0, d, 0, d, h, 0, h);

  pop();
  push();
  texture(top);
  translate(0, 0, -d);
  rotateX(90);
  stroke(255)

  quad(0, 0, w, 0, w, d, 0, d);

  pop();
  push();
  texture(right);
  translate(w, 0, 0);
  rotateY(90);
  stroke(255)

  quad(0, 0, d, 0, d, h, 0, h);

  pop();
  push();
  texture(bottom);
  translate(0, h, 0);
  rotateX(-90);
  stroke(255)

  quad(0, 0, w, 0, w, d, 0, d);

  pop();
  push();
  texture(back);
  rotateY(180);
  translate(-w, 0, d);
  stroke(255)

  quad(0, 0, w, 0, w, h, 0, h);
}

function draw() {
  background(0);

  // Simple rotation control by mouse.
  rotateZ(frameCount * 0.3);
  rotateX(frameCount * 0.3);
  rotateY(frameCount * 0.3);

  drawFaceBox(BOX_WIDTH, BOX_HEIGHT, BOX_DEPTH,
      FRONT_IMG, TOP_IMG, RIGHT_IMG, BOTTOM_IMG, LEFT_IMG, BACK_IMG);
}