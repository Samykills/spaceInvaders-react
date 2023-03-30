import Phaser from "phaser";
import BattleOneScene from "./scenes/BattleOneScene";

import HelloWorldScene from "./scenes/HelloWorldScene";
import PreloaderScene from "./scenes/PreloaderScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  parent: "phaser-container",
  version: "0.0.1",
  backgroundColor: "#282c34",
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: 1024,
    height: 1024,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  canvasStyle: "height:100%; width:80%;",
  physics: {
    default: "arcade",
    arcade: {
      // debug: true,
      gravity: {
        y: 200,
      },
    },
  },
  scene: [PreloaderScene, BattleOneScene, HelloWorldScene],
};

export default new Phaser.Game(config);
