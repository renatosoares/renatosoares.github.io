
/**
 * @description  Asteroid: Asteroid
 */

import { CONST } from "../const/const";

export class Asteroid extends Phaser.GameObjects.Graphics
{
    private currentScene: Phaser.Scene;
    private velocity: Phaser.Math.Vector2;
    private radius: number;
    private asteroidRadius: number;
    private sizeOfAsteroid: number;
    private numberOfSides: number;

    constructor(params)
    {
        super(params.scene, params);
    }
}
