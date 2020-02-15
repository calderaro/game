import Canvas from "../utils/Canvas";
import Vector from "../utils/Vector";

export default class Projectile {
  pos: Vector;
  vel: Vector;
  dir: number;
  canvas: Canvas;
  constructor(initialPosition: Vector, dirPosition: Vector) {
    this.canvas = new Canvas(new Vector(16, 16));
    this.pos = initialPosition;
    this.vel = new Vector(1, 1);
    this.dir = initialPosition.angle(dirPosition);
  }
  getPos() {
    return this.pos;
  }
  tick = () => {
    const vel = new Vector(0, 0).addAngle(this.dir).multiply(new Vector(5, 5));
    this.pos.add(vel);
  };
  render() {
    this.canvas.clear();
    this.canvas.context.fillStyle = "#58ACFA";
    this.canvas.context.beginPath();
    this.canvas.context.arc(
      this.canvas.canvas.width / 2,
      this.canvas.canvas.height / 2,
      this.canvas.canvas.width / 2 - 2,
      0,
      2 * Math.PI
    );
    this.canvas.context.fill();
    /*
    this.canvas.context.strokeStyle = "rgba(0, 0, 0, 1)";
    this.canvas.context.beginPath();
    this.canvas.context.rect(
      0,
      0,
      this.canvas.canvas.width,
      this.canvas.canvas.height
    );
    this.canvas.context.stroke();
    this.canvas.context.strokeStyle = "black";*/
  }
}
