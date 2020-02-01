import Vector from "victor";
import Canvas from "./utils/Canvas";
import Keyboard from "./utils/Keyboard";
import Player from "./entities/Player";
import Projectile from "./entities/Projectile";

export default class Game {
  canvas: Canvas;
  keyboard: Keyboard;
  player: Player;
  projectiles: Projectile[];
  constructor() {
    this.canvas = new Canvas(new Vector(800, 600));
    this.keyboard = new Keyboard();
    this.player = new Player();
    this.projectiles = [new Projectile()];
    this.keyboard.onChange(this.player.move);
    this.canvas.mount("#root");
    window.requestAnimationFrame(this.render);
  }
  render = () => {
    this.canvas.render();
    this.player.tick();
    this.player.render();
    this.canvas.context.drawImage(
      this.player.canvas.canvas,
      this.player.pos.x,
      this.player.pos.y
    );

    this.projectiles.forEach(projectile => {
      projectile.tick();
      projectile.render();
      this.canvas.context.drawImage(
        projectile.canvas.canvas,
        projectile.pos.x,
        projectile.pos.y
      );
    });
    window.requestAnimationFrame(this.render);
  };
}
