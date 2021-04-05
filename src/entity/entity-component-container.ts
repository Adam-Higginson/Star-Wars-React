import Entity from "./entity";
import EntityComponent from "./component/entity-component";

export default class EntityComponentContainer {
    private entity: Entity;
    private readonly entityComponents : EntityComponent[];

    constructor(entity: Entity) {
        this.entity = entity;
        this.entityComponents = [];
    }

    addComponent(entityComponent: EntityComponent) {
        this.entityComponents.push(entityComponent);
        entityComponent.onAttachedToComponentContainer(this);
    }


    load() {
        this.entityComponents.forEach(c => c.load());
    }


    activate() {
        this.entityComponents.forEach(c => c.activate());
    }


    update(deltaTime : number) {
        this.entityComponents.forEach(c => c.update(deltaTime));
    }

    destroy() {
        this.entityComponents.forEach(c => c.destroy());
    }

    broadcastComponentEvent(eventName: string, eventData: any) {
        this.entityComponents.forEach(c => c.onComponentEvent(eventName, eventData));
    }
}