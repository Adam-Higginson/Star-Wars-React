import EntityComponent from './entity-component';
export default class PrintHelloEntityComponent extends EntityComponent {
    
    activate() {
        console.log("Hello World!");
    }
}