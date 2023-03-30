import Phaser from "phaser";
import KeyMaps from "../const/KeyMaps";

import TextureMaps from "../const/TextureMaps";
import KeyboardInput from "./KeyboardInput";
class Player extends Phaser.Physics.Arcade.Sprite {
  playerScale = 0.15;
  inputCursor: Phaser.Types.Input.Keyboard.CursorKeys | undefined = undefined;
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, TextureMaps.playerShip);

    this.setScale(this.playerScale);
    const calcx = x / 2 - this.displayWidth / 2;
    const calcy = y - this.displayHeight - 20;

    this.setPosition(calcx, calcy);
    this.setPhysics(scene);
  }

  private setPhysics = (scene: Phaser.Scene) => {
    scene.physics.add.existing(this);
    this.setDamping(true);
    this.setMaxVelocity(300);
    this.setDrag(0.3);
    this.setCollideWorldBounds(true);
  };

  public reactToKeyboardInput = () => {
    const keymap = KeyboardInput.getKeyMap();
    if (keymap.get(KeyMaps.ArrowUp)) {
      this.setAccelerationY(-3000);
    } else if (keymap.get(KeyMaps.ArrowDown)) {
      this.setAccelerationY(3000);
    } else {
      this.setAccelerationY(0);
    }

    if (keymap.get(KeyMaps.ArrowLeft)) {
      this.setAccelerationX(-3000);
    } else if (keymap.get(KeyMaps.ArrowRight)) {
      this.setAccelerationX(3000);
    } else {
      this.setAccelerationX(0);
    }
  };

  public updatePlayer = (scene: Phaser.Scene) => {
    this.reactToKeyboardInput();
  };
}

export default Player;
