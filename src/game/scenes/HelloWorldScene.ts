import Phaser from "phaser";
import Player from "../classes/Player";
import SceneNames from "../const/SceneNameConst";

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super(SceneNames.HelloWorldScene);
  }

  create() {
    // this.createEmitter();
    let { width, height } = this.sys.game.canvas;

    this.add.image(0, 0, "spaceBackground").setOrigin(0, 0);
    this.createPlayer();
  }

  // createEmitter() {
  //   const particles = this.add.particles("red");

  //   const emitter = particles.createEmitter({
  //     speed: 100,
  //     scale: { start: 1, end: 0 },
  //     blendMode: "ADD",
  //   });

  //   const logo = this.physics.add.image(400, 100, "logo");

  //   logo.setVelocity(1, 2);
  //   logo.setBounce(1, 1);
  //   logo.setCollideWorldBounds(true);

  //   emitter.startFollow(logo);
  // }

  createPlayer() {
    this.children.add(new Player(this, 500, 250));
  }
}
