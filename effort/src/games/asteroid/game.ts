/**
 * @description  Asteroid: Game
 */

/// <reference path="../../phaser.d.ts"/>

import "phaser";
import { BootScene } from "./scenes/bootScene";
import { MainMenuScene } from "./scenes/mainMenuScene";
import { GameScene } from "./scenes/gameScene";

const config: GameConfig = {
    title: "Asteroid",
    url: "https://renatosoares.net.br",
    version: "0.1.0",
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: "game",
    scene: [
        BootScene,
        MainMenuScene,
        GameScene
    ],
    input: {
        keyboard: true,
        mouse: false,
        touch: false,
        gamepad: false
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    backgroundColor: "#000000",
    render: {
        pixelArt: false,
        antialias: true,
        autoResize: false
    }
};

export class Game extends Phaser.Game
{
    constructor(config: GameConfig)
    {
        super(config);
    }
}

window.addEventListener("load", () =>
{
    var game = new Game(config);
});
