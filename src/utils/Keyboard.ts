import mitt from "mitt";

export default class Keyboard {
  emitter: mitt.Emitter;
  keys: string[];
  constructor() {
    this.keys = [];
    this.emitter = mitt();

    document.addEventListener("keydown", ({ code }) => {
      if (this.keys.indexOf(code) === -1) {
        this.setKeys([...this.keys, code]);
      }
    });
    document.addEventListener("keyup", ({ code }) => {
      this.setKeys(this.keys.filter(key => key !== code));
    });
  }
  setKeys = newState => {
    this.keys = newState;
    this.emitter.emit("change", this.keys);
  };
  onChange = (cb: () => void) => {
    this.emitter.on("change", cb);
  };
}
