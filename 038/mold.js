class Mold {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = 0.5;

    this.heading = random(0, 360);
    this.vx = cos(this.heading);
    this.vy = sin(this.heading);
    this.rotAngle = 10;

    this.rSensorPos = createVector(0, 0);
    this.lSensorPos = createVector(0, 0);
    this.fSensorPos = createVector(0, 0);

    this.sensorAngle = 25;
    this.sensorDist = 5;

    this.h = 359;
    this.hueChange = -1;

    this.s = 359;
    this.satChange = -10;

    this.b = 359;
    this.briChange = -1;
  }

  update() {
    this.vx = cos(this.heading);
    this.vy = sin(this.heading);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    this.getSensorPos(this.rSensorPos, this.heading + this.sensorAngle);
    this.getSensorPos(this.lSensorPos, this.heading - this.sensorAngle);
    this.getSensorPos(this.fSensorPos, this.heading);

    let index, l, r, f;
    index =
      4 * (d * floor(this.rSensorPos.y)) * (d * width) +
      4 * (d * floor(this.rSensorPos.x));
    r = pixels[index];
    index =
      4 * (d * floor(this.lSensorPos.y)) * (d * width) +
      4 * (d * floor(this.lSensorPos.x));
    l = pixels[index];
    index =
      4 * (d * floor(this.fSensorPos.y)) * (d * width) +
      4 * (d * floor(this.fSensorPos.x));
    f = pixels[index];

    if (f > l && f > r) {
      this.heading += 0;
    } else if (f < l && f < r) {
      if (random(1) < 0.5) {
        this.heading += this.rotAngle;
      }
    } else if (l > r) {
      this.heading += -this.rotAngle;
    } else if (r > l) {
      this.heading += this.rotAngle;
    }
  }

  display() {
    noStroke();
    this.h += this.hueChange;

    if (this.h < 1) {
      this.h = 360;
    }
    // this.s += this.satChange;

    // if (this.s < 1) {
    //   this.s = 255;
    // }
    // this.b += this.briChange;

    // if (this.b < 1) {
    //   this.b = 255;
    // }

    fill(this.h, 360, 200, 10);

    // fill(255, 20);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
    //     line(
    //       this.x,
    //       this.y,
    //       this.x + this.r * 3 * this.vx,
    //       this.y + this.r * 3 * this.vy
    //     );
    //     fill(255, 0, 0);
    //     ellipse(this.rSensorPos.x, this.rSensorPos.y, this.r * 2, this.r * 2);
    //     ellipse(this.lSensorPos.x, this.lSensorPos.y, this.r * 2, this.r * 2);
    //     ellipse(this.fSensorPos.x, this.fSensorPos.y, this.r * 2, this.r * 2);
  }

  getSensorPos(sensor, angle) {
    sensor.x = (this.x + this.sensorDist * cos(angle) + width) % width;
    sensor.y = (this.y + this.sensorDist * sin(angle) + height) % height;
  }
}
