import Vector from "../utils/Vector";

export default class Renderer {
  elm: HTMLElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  dimensions: Vector;

  constructor(dimensions: Vector) {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.dimensions = dimensions;

    this.onResize(this.dimensions);
  }
  mount = (elm: string) => {
    this.elm = document.querySelector(elm);
    this.elm.appendChild(this.canvas);
  };
  onResize = (dimensions: Vector) => {
    this.canvas.style.width = dimensions.x.toString();
    this.canvas.style.height = dimensions.y.toString();
    this.canvas.style.border = "1px solid black";
    this.canvas.style.background = "#8BDE7B";
    this.canvas.width = dimensions.x;
    this.canvas.height = dimensions.y;
  };
  clear = () => {
    this.context.clearRect;
    this.context.clearRect(0, 0, this.dimensions.x, this.dimensions.y);
  };
  render = () => {
    this.clear();
  };
}
