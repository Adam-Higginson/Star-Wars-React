import EntityManager from '../entity/entity-manager';
import PrintHelloEntityComponent from '../entity/component/print-hello-entity-component';
import SpriteRendererEntityComponent from '../entity/component/sprint-renderer-entity-component';
import Renderer from '../renderer/renderer';
import SpriteResources from '../renderer/sprite-resources';
import React from 'react';


interface GameProps {
    screenWidth: number;
    screenHeight: number;
}

export default function Game({screenWidth, screenHeight} : GameProps) {
    const entityManager = new EntityManager();
    
    const setContainer = (container: HTMLDivElement) => {
        const renderer = new Renderer(screenWidth, screenHeight, container);
        renderer.start();
        setup(renderer);
    };

    const setup = async (renderer: Renderer) => {

        const spriteResources = new SpriteResources([
            'images/planets/planet_34.png'
        ]);

        const spriteMap = await spriteResources.load();

        entityManager.createEntity('TestEntity')
                     .addComponent(new SpriteRendererEntityComponent(spriteMap['images/planets/planet_34.png'], renderer))
                     .addComponent(new PrintHelloEntityComponent());
        
        entityManager.load();
        entityManager.activate();
    }

    return (
        <div ref={setContainer} />
    )
}