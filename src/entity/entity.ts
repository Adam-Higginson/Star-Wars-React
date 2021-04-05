import EntityComponentContainer from './entity-component-container';
import EntityComponent from './component/entity-component';
export default class Entity {
    
    readonly id: number;
    readonly name: string;
    private entityComponentContainer: EntityComponentContainer;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.entityComponentContainer = new EntityComponentContainer(this);
    }

    /**
     * Add a new component to this entity
     * @param entityComponent The component to add
     * @returns this instance, for method chaining.
     */
    addComponent(entityComponent: EntityComponent) : Entity {
        this.entityComponentContainer.addComponent(entityComponent);
        return this;
    }

    load(): void {
        this.entityComponentContainer.load();
    }

    activate() {
        this.entityComponentContainer.activate();
    }
}