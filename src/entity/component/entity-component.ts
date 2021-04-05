import EntityComponentContainer from '../entity-component-container';
export default abstract class EntityComponent {
    private componentContainers: EntityComponentContainer[] = [];
    
    onAttachedToComponentContainer(componentContainer: EntityComponentContainer) {
        this.componentContainers.push(componentContainer);
    }

    load() : void {
        // Nothing happens by default
    }

    activate() : void {
        // Nothing happens by default
    }

    update(deltaTime: number) : void {
        // Nothing happens by default
    }

    destroy() : void {
        // Nothing happens by default
    }

    broadcastComponentEvent(eventName: string, eventData: any) {
        this.componentContainers.forEach(container => container.broadcastComponentEvent(eventName, eventData));
    }

    onComponentEvent(evenName: string, eventData: any): void {
        // Nothing happens by default
    }
}