class Pendulum {
  constructor(length, c, size, note) {
    this.length = length;
    this.angle = 45;
    this.angleV = 0;
    this.angleA = 0;
    this.c = c;
    this.size = size;

    this.note = note;
    this.osc = new p5.Oscillator();
    this.osc.start();
    this.osc.freq(midiToFreq(this.note));
    this.osc.amp(0);
  }
  update() {
    if (this.collison()) {
      this.nc = color(255);
      this.osc.amp(1, 0.07);
    } else {
      this.nc = this.c;
      this.osc.amp(0, 0.07);
    }
    this.angleA = (-gravity / this.length) * sin(this.angle);
    this.angleV += this.angleA;
    this.angle += this.angleV;

    this.x = this.length * sin(this.angle);
    this.y = this.length * cos(this.angle);
  }
  display() {
    stroke(this.nc);
    fill(this.nc);

    line(0, 0, this.x, this.y);
    ellipse(this.x, this.y, this.size, this.size);
  }

  collison() {
    if (this.x >= -10 && this.x <= 10) {
      return true;
    } else {
      return false;
    }
  }
}
