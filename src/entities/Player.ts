import Vector from "victor";
import Canvas from "../utils/Canvas";

interface VectorInterface {
  x: number;
  y: number;
  addX: (VectorInterface) => VectorInterface;
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
  private pos: VectorInterface;
  canvas: Canvas;
  constructor(x?: number, y?: number) {
    this.canvas = new Canvas(new Vector(32, 64));
    this.pos = new Vector(x, y);
    this.vel = new Vector(0, 0);
    this.speed = 2;
  }
  getPos() {
    return this.pos;
  }
  move = (keys: string[] = []) => {
    const xDir = keys.filter(key => movementsX.has(key)).reverse()[0];
    const yDir = keys.filter(key => movementsY.has(key)).reverse()[0];
    this.vel.x = movementsX.get(xDir) * this.speed;
    this.vel.y = movementsY.get(yDir) * this.speed;
  };
  render(context: CanvasRenderingContext2D) {
    this.canvas.context.fillStyle = "red";
    this.canvas.context.fillRect(0, 0, 10, 10);
    this.canvas.context.fillStyle = "black";
    context.drawImage(this.canvas.canvas, this.pos.x, this.pos.y);
    this.pos = this.pos.add(this.vel);
  }
}
