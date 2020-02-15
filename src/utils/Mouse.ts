import mitt from "mitt";
import Vector from "../utils/Vector";

export default class Mouse {
  emitter: mitt.Emitter;
  keys: number[];
  pos: Vector;
  constructor(target: HTMLElement) {
    this.keys = [];
    this.emitter = mitt();

    target.addEventListener("mousedown", this.onMouseDown);
    target.addEventListener("mouseup", this.onMouseUp);
    target.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("contextmenu", e => e.preventDefault(), false);
  }
  onMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (this.keys.indexOf(event.which) === -1) {
      this.setKeys([...this.keys, event.which]);
    }
  };
  onMouseUp = (event: MouseEvent) => {
    event.stopPropagation();
    this.setKeys(this.keys.filter(key => key !== event.which));
  };

  onMouseMove = (event: MouseEvent) => {
    this.pos = new Vector(event.offsetX, event.offsetY);
  };
  setKeys = (newState: number[]) => {
    this.keys = newState;
    this.emitter.emit("change", this.keys);
  };
  onChange = (cb: (keys: string[]) => void) => {
    this.emitter.on("change", cb);
  };
}
