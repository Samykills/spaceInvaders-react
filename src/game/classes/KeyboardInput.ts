import Phaser from "phaser";
import KeyMaps from "../const/KeyMaps";

abstract class KeyboardInput {
  private static keymap = new Map<string, boolean>([
    [KeyMaps.ArrowUp, false],
    [KeyMaps.ArrowDown, false],
    [KeyMaps.ArrowLeft, false],
    [KeyMaps.ArrowRight, false],
    [KeyMaps.Space, false],
    [KeyMaps.Enter, false],
  ]);

  public static getKeyMap() {
    return this.keymap;
  }

  public static addKeyboardInputToScene(scene: Phaser.Scene) {
    scene.input.keyboard.addListener("keydown", this.handleKeyDown);
    scene.input.keyboard.addListener("keyup", this.handleKeyUp);
  }

  private static handleKeyDown = (event: KeyboardEvent) => {
    switch (event.code) {
      case KeyMaps.ArrowUp:
        this.keymap.set(KeyMaps.ArrowUp, true);
        break;
      case KeyMaps.ArrowDown:
        this.keymap.set(KeyMaps.ArrowDown, true);
        break;
      case KeyMaps.ArrowLeft:
        this.keymap.set(KeyMaps.ArrowLeft, true);
        break;
      case KeyMaps.ArrowRight:
        this.keymap.set(KeyMaps.ArrowRight, true);
        break;
      case KeyMaps.Space:
        this.keymap.set(KeyMaps.Space, true);
        break;
      case KeyMaps.Enter:
        this.keymap.set(KeyMaps.Enter, true);
        break;
      default:
        break;
    }
  };

  private static handleKeyUp = (event: KeyboardEvent) => {
    switch (event.code) {
      case KeyMaps.ArrowUp:
        this.keymap.set(KeyMaps.ArrowUp, false);
        break;
      case KeyMaps.ArrowDown:
        this.keymap.set(KeyMaps.ArrowDown, false);
        break;
      case KeyMaps.ArrowLeft:
        this.keymap.set(KeyMaps.ArrowLeft, false);
        break;
      case KeyMaps.ArrowRight:
        this.keymap.set(KeyMaps.ArrowRight, false);
        break;
      case KeyMaps.Space:
        this.keymap.set(KeyMaps.Space, false);
        break;
      case KeyMaps.Enter:
        this.keymap.set(KeyMaps.Enter, false);
        break;
      default:
        break;
    }
  };
}

export default KeyboardInput;
