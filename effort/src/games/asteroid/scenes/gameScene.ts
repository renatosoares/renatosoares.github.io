/**
 * @description  Asteroid: Game Scene
 */

import { Asteroid } from "../objects/asteroid";
import { Bullet } from "../objects/bullet";
import { Ship } from "../objects/ship";
import { CONST } from "../const/const";

export class GameScene extends Phaser.Scene
{
    private player: Ship;
    private asteroids: Asteroid[];
    private numberOfAsteroids: number;
    private score: number;
    private bitmapTexts: Phaser.GameObjects.BitmapText[];
    private gotHit: boolean;

    constructor()
    {
        super({
            key: "GameScene"
        });
    }

    create(): void
    {
        this.player = new Ship({ scene: this, opt: {} });
        this.score = CONST.SCORE;
        this.bitmapTexts = [];
        this.bitmapTexts.push(
            this.add.bitmapText(
                this.sys.canvas.width / 2,
                40,
                "asteroidFont",
                "" + this.score,
                80
            )
        );
        this.gotHit = false;
    }

    update(): void
    {
        this.player.update();
    }
}
