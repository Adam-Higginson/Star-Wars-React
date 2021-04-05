import EntityComponent from './entity-component';
import * as Pixi from 'pixi.js';
import Renderer from '../../renderer/renderer';

export default class SpriteRendererEntityComponent extends EntityComponent {

    constructor(private sprite: Pixi.Sprite, private renderer: Renderer) {
        super();
    }

    activate() {
        this.renderer.addChild(this.sprite);
    }
}