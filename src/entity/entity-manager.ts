import Entity from "./entity";

export default class EntityManager {
    private currentEntityId;
    private readonly entities: Entity[];

    constructor() {
        this.currentEntityId = 0;
        this.entities = [];
    }

    public createEntity(name: string) {
        const entity = new Entity(++this.currentEntityId, name);
        this.entities.push(entity);
        
        return entity;
    }

    public activate() {
        this.entities.forEach(e => e.activate());
    }

    public load() {
        this.entities.forEach(e => e.load());
    }
}