import Vector from "victor";
import Canvas from "../utils/Canvas";

interface VectorInterface {
  x: number;
  y: number;
  addX: (VectorInterface) => void;
  addY: (VectorInterface) => void;
  add: (VectorInterface) => void;
  clone: (VectorInterface) => VectorInterface;
}

export default class Player {
  pos: VectorInterface;
  canvas: Canvas;
  constructor(x?: number, y?: number) {
    this.canvas = new Canvas(new Vector(16, 16));
    this.pos = new Vector(100, 100);
    this.vel = new Vector(1, 1);
  }
  getPos() {
    return this.pos;
  }
  tick = () => {
    this.pos.add(this.vel);
  };
  render() {
    this.canvas.clear();

    this.canvas.context.beginPath();
    this.canvas.context.arc(
      this.canvas.canvas.width / 2,
      this.canvas.canvas.height / 2,
      this.canvas.canvas.width / 2 - 2,
      0,
      2 * Math.PI
    );
    this.canvas.context.stroke();

    this.canvas.context.strokeStyle = "rgba(0, 0, 0, 1)";
    this.canvas.context.beginPath();
    this.canvas.context.rect(
      0,
      0,
      this.canvas.canvas.width,
      this.canvas.canvas.height
    );
    this.canvas.context.stroke();
    this.canvas.context.strokeStyle = "black";
  }
}
