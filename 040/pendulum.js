class Pendulum {
  constructor(length) {
    this.length = length;
    this.angle = 45;
    this.angleV = 0;
    this.angleA = 0;
    this.c = color(255);
  }
  update() {
    if (this.collison()) {
      this.c = color(255, 0, 0);
    } else {
      this.c = color(255);
    }
    this.angleA = (-gravity / this.length) * sin(this.angle);
    this.angleV += this.angleA;
    this.angle += this.angleV;

    this.x = this.length * sin(this.angle);
    this.y = this.length * cos(this.angle);
  }
  display() {
    stroke(this.c);
    fill(this.c);

    line(0, 0, this.x, this.y);
    ellipse(this.x, this.y, 10, 10);
  }

  collison() {
    if (this.x >= -10 && this.x <= 10) {
      return true;
    } else {
      return false;
    }
  }
}
