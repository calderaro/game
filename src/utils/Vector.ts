export default class Vector {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add = (vector: Vector) => {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  };
  addX = (vector: Vector) => {
    this.x += vector.x;
    return this;
  };
  addY = (vector: Vector) => {
    this.y += vector.y;
    return this;
  };
  addAngle = (angle: number) => {
    this.add(new Vector(Math.cos(angle), Math.sin(angle)));
    return this;
  };
  subtractX = (vector: Vector) => {
    this.x -= vector.x;
    return this;
  };
  subtractY = (vector: Vector) => {
    this.y -= vector.y;
    return this;
  };
  multiply = (vector: Vector) => {
    this.x *= vector.x;
    this.y *= vector.y;
    return this;
  };
  multiplyX = (vector: Vector) => {
    this.x *= vector.x;
    return this;
  };
  multiplyY = (vector: Vector) => {
    this.y *= vector.y;
    return this;
  };
  angle = (vector: Vector) => {
    return Math.atan2(vector.y - this.y, vector.x - this.x);
  };
  clone = () => {
    return new Vector(this.x, this.y);
  };
}
