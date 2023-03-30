import Phaser from "phaser";
import KeyboardInput from "../classes/KeyboardInput";
import Player from "../classes/Player";
import KeyMaps from "../const/KeyMaps";
import SceneNames from "../const/SceneNameConst";
import TextureMaps from "../const/TextureMaps";

export default class BattleOneScene extends Phaser.Scene {
  private background: Phaser.GameObjects.TileSprite | undefined = undefined;
  private player: Player | undefined = undefined;
  constructor() {
    super(SceneNames.BattleOneScene);
  }

  createScrollingBackground = () => {
    const { width, height } = this.scale;

    this.background = this.add
      .tileSprite(0, 0, width, height, TextureMaps.spaceBackground)
      .setOrigin(0, 0)
      .setScrollFactor(0, 1);
  };

  createPlayer() {
    const { width, height } = this.scale;
    this.player = new Player(this, width, height);
    this.children.add(this.player);
  }

  updateBackground() {
    if (this.background) {
      this.background.tilePositionY -= 1;
      const keymaps = KeyboardInput.getKeyMap();
      if (keymaps.get(KeyMaps.ArrowUp)) {
        this.background.tilePositionY -= 1.5;
      }
      if (keymaps.get(KeyMaps.ArrowLeft)) {
        this.background.tilePositionX -= 3;
      }

      if (keymaps.get(KeyMaps.ArrowRight)) {
        this.background.tilePositionX += 3;
      }
    }
  }

  create() {
    this.createScrollingBackground();
    this.createPlayer();
    KeyboardInput.addKeyboardInputToScene(this);
    // set gravity of this scene as 0 so that the player doesn't fall
    this.physics.world.gravity.x = 0;
    this.physics.world.gravity.y = 0;
  }

  update() {
    this.player?.updatePlayer(this);
    this.updateBackground();
  }
}
