import Vector from "./utils/Vector";
import Renderer from "./utils/Renderer";
import Keyboard from "./utils/Keyboard";
import Mouse from "./utils/Mouse";
import Player from "./entities/Player";
import Projectile from "./entities/Projectile";

export default class Game {
  renderer: Renderer;
  keyboard: Keyboard;
  mouse: Mouse;
  player: Player;
  projectiles: Projectile[];
  constructor() {
    this.renderer = new Renderer(new Vector(800, 600));
    this.keyboard = new Keyboard();
    this.mouse = new Mouse(this.renderer.canvas);
    this.player = new Player(new Vector(400, 300));
    this.projectiles = [];
    this.keyboard.onChange(this.player.move);
    this.mouse.onChange(this.onMouseChange);
    this.renderer.mount("#root");
    window.requestAnimationFrame(this.render);
  }
  onMouseChange = (keys: string[]) => {
    if (keys.indexOf(1) !== -1) {
      this.projectiles.push(
        new Projectile(this.player.getPos(), this.mouse.pos.clone())
      );
    }
  };
  render = () => {
    this.renderer.render();
    this.player.tick();
    this.player.render();

    this.renderer.context.drawImage(
      this.player.canvas.canvas,
      this.player.pos.x - this.player.canvas.canvas.width / 2,
      this.player.pos.y - this.player.canvas.canvas.height / 2
    );

    this.projectiles.forEach(projectile => {
      projectile.tick();
      projectile.render();
      this.renderer.context.drawImage(
        projectile.canvas.canvas,
        projectile.pos.x - projectile.canvas.canvas.width / 2,
        projectile.pos.y - projectile.canvas.canvas.height / 2
      );
    });

    this.projectiles = this.projectiles.filter(projectile => {
      if (
        projectile.pos.x > this.renderer.canvas.width ||
        projectile.pos.x < 0 ||
        projectile.pos.y > this.renderer.canvas.height ||
        projectile.pos.y < 0
      ) {
        return false;
      }
      return true;
    });

    window.requestAnimationFrame(this.render);
  };
}
