let grid = [];

let cols, rows;
let size = 10;

let imgUrl = "mushroom.ico";
let img;
let c = [];
let handPose;
let video;
let hands = [];
let options = { flipped: true };

function preload() {
  img = loadImage(imgUrl);
  handPose = ml5.handPose(options);
}
function setup() {
  createCanvas(640, 480);
  colorMode(HSB);
  video = createCapture(VIDEO, { flipped: true });
  video.size(640, 480);
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);

  cols = width / size;
  rows = height / size;
  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    c[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = 0;
      c[i][j] = color(random(60, 180), random(256), random(256));
    }
  }
}

function draw() {
  background(220);
  image(video, 0, 0, width, height);

  // Draw all the tracked hand points
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let indexFinger = hand.keypoints[8];

      addPix(indexFinger.x, indexFinger.y, 10);
    }
  }

  drawRect();
  let nextGrid = [];
  for (let i = 0; i < cols; i++) {
    nextGrid[i] = [];
    for (let j = 0; j < rows; j++) {
      nextGrid[i][j] = 0;
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      if (state > 0) {
        if (j + 1 < rows) {
          let below = grid[i][j + 1];
          let dir;
          if (random() < 0.5) {
            dir = 1;
          } else {
            dir = -1;
          }
          let belowDiag;
          if (i + dir >= 0 && i + dir <= cols - 1) {
            belowDiag = grid[i + dir][j + 1];
          }

          if (below == 0) {
            nextGrid[i][j + 1] = state;
          } else if (belowDiag == 0) {
            nextGrid[i + dir][j + 1] = state;
          } else {
            nextGrid[i][j] = state;
          }
        } else {
          nextGrid[i][j] = state;
        }
      }
    }
  }
  grid = nextGrid;
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}

function drawRect() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] > 0) {
        noStroke();
        fill(c[i][j]);
        // fill(random(255), random(255), random(255), grid[i][j]);
        // fill(0, grid[i][j]);
        ellipseMode(CENTER);
        rect(i * size, j * size, size, size);
        // tint(255, grid[i][j]);
        // img.resize(size, size);
        // image(img, i * size, j * size);
      }
    }
  }
}

function addPix(fingerX, fingerY) {
  let x = floor(fingerX / size);
  let y = floor(fingerY / size);
  x = constrain(x, 0, cols - 1);
  y = constrain(y, 0, rows - 1);
  grid[x][y] = (frameCount % 105) + 150;
}
