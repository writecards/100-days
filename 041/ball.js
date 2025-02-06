class Ball {
  constructor(startingAngle, shiftingAngle, note, buffer, angleV) {
    this.angle = 0;
    this.startingAngle = startingAngle;
    this.shiftingAngle = shiftingAngle;
    this.note = note;
    this.buffer = buffer;
    this.angleV = angleV;
  }

  update() {
    if (this.collision(0)) {
      // fill(255);
      // <<<<<<<<
      //this.note.play();
    }
    //this.angle += this.angleV;
  }

  display() {
    push();
    //this.x = r * sin(this.startingAngle + this.angle + this.shiftingAngle);
    rotate(-this.shiftingAngle);
    let angle = map(mouseX, 100, 400, 0, 360);
    let xval = r * cos(angle);
    let yval = r * sin(angle);

    //line(-r, 0, r, 0);
    textAlign(CENTER, CENTER);

    text("酷", xval, yval - 45, 20, 20);
    text("儿", xval, yval - 30, 20, 20);
    text("没", xval, yval - 15, 20, 20);
    text("有", xval, yval, 20, 20);
    text("未", xval, yval + 15, 20, 20);
    text("来", xval, yval + 30, 20, 20);
    // text("酷", this.x, -45, 20, 20);
    // text("儿", this.x, -30, 20, 20);
    // text("没", this.x, -15, 20, 20);
    // text("有", this.x, 0, 20, 20);
    // text("未", this.x, 15, 20, 20);
    // text("来", this.x, 30, 20, 20);
    // ellipse(this.x, 0, 20, 20);
    pop();
  }

  collision(x) {
    if (this.x >= x - this.buffer && this.x <= x + this.buffer) {
      return true;
    } else {
      return false;
    }
  }
}
