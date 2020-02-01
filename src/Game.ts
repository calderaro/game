import Vector from "victor";
import Canvas from "./utils/Canvas";
import Keyboard from "./utils/Keyboard";
import Player from "./entities/Player";

export default class Game {
  canvas: Canvas;
  keyboard: Keyboard;
  player: Player;
  constructor() {
    this.canvas = new Canvas(new Vector(800, 600));
    this.keyboard = new Keyboard();
    this.player = new Player();
    this.keyboard.onChange(this.player.move);
    this.canvas.mount("#root");
    window.requestAnimationFrame(this.render);
  }
  render = () => {
    this.canvas.render();
    this.player.render(this.canvas.context);
    window.requestAnimationFrame(this.render);
  };
}
