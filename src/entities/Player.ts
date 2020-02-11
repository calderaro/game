import Vector from "victor";
import Canvas from "../utils/Canvas";

interface VectorInterface {
  x: number;
  y: number;
  addX: (VectorInterface) => void;
  add: (VectorInterface) => void;
  multiply: (VectorInterface) => void;
  clone: () => VectorInterface;
}

const movementsX = new Map([
  ["KeyA", -1],
  ["KeyD", 1],
  [undefined, 0]
]);
const movementsY = new Map([
  ["KeyW", -1],
  ["KeyS", 1],
  [undefined, 0]
]);

export default class Player {
  canvas: Canvas;
  pos: VectorInterface;
  vel: VectorInterface;
  acc: VectorInterface;
  dir: VectorInterface;
  constructor(x?: number, y?: number) {
    this.canvas = new Canvas(new Vector(32, 64));
    this.pos = new Vector(x, y);
    this.vel = new Vector(0, 0);
    this.acc = new Vector(2.5, 2.5);
    this.dir = new Vector(0, 0);
    this.mass = 125;
    this.force = 100;
    this.friction = 0.8;
    this.acc = this.force / this.mass;
  }
  getPos() {
    return this.pos;
  }
  move = (keys: string[] = []) => {
    const xDir = keys.filter(key => movementsX.has(key)).reverse()[0];
    const yDir = keys.filter(key => movementsY.has(key)).reverse()[0];
    this.dir = new Vector(movementsX.get(xDir), movementsY.get(yDir));
  };
  tick = () => {
    const acceleration = this.dir
      .clone()
      .multiply(new Vector(this.acc, this.acc));
    this.vel.add(acceleration);

    if (Math.abs(this.vel.x) < this.friction) {
      this.vel.subtractX(this.vel);
    } else {
      this.vel.multiplyX(new Vector(this.friction, 0));
    }
    if (Math.abs(this.vel.y) < this.friction) {
      this.vel.subtractY(this.vel);
    } else {
      this.vel.multiplyY(new Vector(0, this.friction));
    }
    // this.vel.multiply(friction);
    console.log(Math.abs(this.vel.x));
    this.pos.add(this.vel);
    console.log(this.pos, this.vel, acceleration, this.acc);
  };
  render() {
    this.canvas.context.fillStyle = "red";
    this.canvas.context.fillRect(0, 0, 10, 10);
    this.canvas.context.fillStyle = "black";
  }
}

/*

  maybe would be better do the simulation only calculating forces and then map that to acceleration/velocity/position at the end?
  i could first determine the Net Force of the player.

  been the NET FORCE the sum of all of the forces it includes force of friction too
  that way the object will no accelerate infinitely
*/
