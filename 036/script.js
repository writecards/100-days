//following https://www.youtube.com/watch?v=cH90Oadi1wY&list=PLxl8HNCwRbBT1bxgMRlGyxB7wjOmPF0zv&index=3&ab_channel=WebBae

//cosntants
const NUM_CIRCLES = 100;
const FLOAT_SPEED = 1;
const TRANSITION_SPEED = 0.05;
const CIRCLE_SIZE_DIVISOR = 25;

//vars
let circles = [];
let float = true;
let circleSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < NUM_CIRCLES; i++) {
    circleSize = width / CIRCLE_SIZE_DIVISOR;
    let circle = {
      x: random(circleSize / 2, width - circleSize / 2),
      y: random(circleSize / 2, height - circleSize / 2),
      speedX: random(-FLOAT_SPEED, FLOAT_SPEED),
      speedY: random(-FLOAT_SPEED, FLOAT_SPEED),
      targetX: null,
      targetY: null,
    };
    circles.push(circle);
  }
}

function draw() {
  background(255);
  fill(0, 90);
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    if (float) {
      //update circle pos based on speed
      circle.x += circle.speedX;
      circle.y += circle.speedY;
      //collision detection
      if (circle.x < 0 + circleSize / 2 || circle.x > width - circleSize / 2) {
        circle.speedX *= -1;
      }
      if (circle.y < 0 + circleSize / 2 || circle.y > height - circleSize / 2) {
        circle.speedY *= -1;
      }
    } else {
      //calculate spacing needed for circles
      let spacingX = width / NUM_CIRCLES;
      let spacingY = height / NUM_CIRCLES;

      //set target pos for lined-up cirlces

      circle.targetX = i * spacingX + circleSize * 0.25;
      //circle.targetY = i * spacingY + circleSize * 0.25;
      circle.targetY = height / 2;

      //animate transition using lerp
      circle.x = lerp(circle.x, circle.targetX, TRANSITION_SPEED);
      circle.y = lerp(circle.y, circle.targetY, TRANSITION_SPEED);
    }

    //draw circle at updated position
    ellipse(circle.x, circle.y, circleSize, circleSize);
  }
}

function mouseWheel() {
  float = false;
}

function mouseClicked() {
  float = !float;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  circleSize = width / CIRCLE_SIZE_DIVISOR;
}
