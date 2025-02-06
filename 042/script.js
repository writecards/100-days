// following https://www.youtube.com/watch?v=88HToL9SwjI&ab_channel=PattVira
//spiral equation: r = a + b * theta
let cols, rows;
let size = 50;
let threshold = 0.05;
let t = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  cols = width / size;
  rows = height / size;
  textSize(size);
  textAlign(CENTER, CENTER);
}

function draw() {
  frameRate(8);
  background(0);
  fill(255);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = size / 2 + i * size;
      let y = size / 2 + j * size;
      let d = dist(x, y, width / 2, height / 2);
      let k = 30;

      let dx = x - width / 2;
      let dy = y - height / 2;
      let angle = atan2(dy, dx); //inverse tangent to get angle

      let spiralPath = sin(d / k + angle + t);
      let distanceFactor = 100;
      let angleFactor = 10;
      //let condition = sin(d / distanceFactor + angleFactor * angle);
      let condition = sin(d + angle);
      let symbol;
      let c;

      if (spiralPath > threshold) {
        if (random(0, 1) > 0.5) {
          symbol = "未";
        } else {
          symbol = "来";
        }

        c = colorGradient(d);
        text(symbol, x, y);
      } else {
        symbol = ".";
        c = color(255, 100);
        // text("来", x, y);
      }
      fill(c);
      text(symbol, x, y);
    }
  }

  t -= 0.01;
}

function colorGradient(d) {
  let colors = [color(186, 0, 183), color(2, 222, 174)];
  let colorRadius = 300;
  let amt = (d % colorRadius) / colorRadius;
  return lerpColor(colors[0], colors[1], amt);
}

function randomPickTwo() {
  let randomNum = random(0, 1);
}
