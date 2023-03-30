import Phaser from "phaser";
import SceneNames from "../const/SceneNameConst";
import spaceship from "../../assets/spaceship.png";
import spaceBackground from "../../assets/spaceBackground.jpeg";
import TextureMaps from "../const/TextureMaps";

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super(SceneNames.PreloaderScene);
  }

  preload() {
    this.load.image(TextureMaps.playerShip, spaceship);
    this.load.image(TextureMaps.spaceBackground, spaceBackground);
  }

  create() {
    let { width, height } = this.sys.game.canvas;
    this.add.text(width - 200, height - 50, "Loading game ...");
    this.scene.start(SceneNames.BattleOneScene);
  }
}
