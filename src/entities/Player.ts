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
    this.pos.add(this.dir.clone().multiply(this.acc));
  };
  render() {
    this.canvas.context.fillStyle = "red";
    this.canvas.context.fillRect(0, 0, 10, 10);
    this.canvas.context.fillStyle = "black";
    this.pos.add(this.vel);
  }
}
