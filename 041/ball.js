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
      this.note.play();
    }
    this.angle += this.angleV;
  }

  display() {
    push();
    this.x = r * cos(this.startingAngle + this.angle + this.shiftingAngle);
    rotate(-this.shiftingAngle);
    //line(-r, 0, r, 0);
    ellipse(this.x, 0, 20, 20);
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
