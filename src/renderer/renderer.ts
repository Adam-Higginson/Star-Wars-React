import * as Pixi from 'pixi.js'

export default class Renderer {
    private app : Pixi.Application;

    constructor(screenWidth: number, 
                screenHeight: number, 
                private divElement: HTMLDivElement) {
        this.app = new Pixi.Application({
            width: screenWidth, 
            height: screenHeight,
            antialias: true});
    }

    public start() {
        console.log('Starting renderer');
        this.divElement.appendChild(this.app.view);
        this.app.start();
    }

    addChild(sprite: Pixi.Sprite) {
        this.app.stage.addChild(sprite);
    }


    public stop() {
        console.log('Stopping renderer');
        this.app.stop();
    }
}