import Vector from "victor";

interface VectorInterface {
  x: number;
  y: number;
}

export default class Canvas {
  elm: HTMLElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  dimensions: VectorInterface;

  constructor(dimensions: VectorInterface) {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.dimensions = dimensions;

    this.onResize(this.dimensions);
  }
  mount = (elm: string) => {
    this.elm = document.querySelector(elm);
    this.elm.appendChild(this.canvas);
  };
  onResize = (dimensions: VectorInterface) => {
    this.canvas.style.width = dimensions.x.toString();
    this.canvas.style.height = dimensions.y.toString();
    this.canvas.style.border = "1px solid black";
    this.canvas.width = dimensions.x;
    this.canvas.height = dimensions.y;
  };
  render = () => {
    this.context.clearRect(0, 0, this.dimensions.x, this.dimensions.y);
  };
}
