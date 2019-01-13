/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Asteroid: Bullet
 * @license      Digitsensitive
 */

export class Bullet extends Phaser.GameObjects.Graphics
{
    private colors: number[];
    private selectedColor: number;
    private currentScene: Phaser.Scene;
    private velocity: Phaser.Math.Vector2;
    private lifeSpan: number;
    private isOffScreen: boolean;

    constructor(scene, params)
    {
        super(scene, params);
    }

    update(): void
    {
    }
}
