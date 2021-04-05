import * as Pixi from 'pixi.js'

export interface ISpriteNameMap {
    [textureName:string] : Pixi.Sprite;
}

export default class SpriteResources {

    private readonly loader: Pixi.Loader;

    constructor(private fileNames: string[]) {
        this.loader = new Pixi.Loader();
        this.loader.add(fileNames);
    }

    public load() : Promise<ISpriteNameMap> {
        return new Promise<ISpriteNameMap>((resolve, reject) => {
            this.loader.onError.add((err: any) => reject(err));

            this.loader.load(() => {
                const spriteMap: ISpriteNameMap = {};
                this.fileNames.forEach(fileName => {
                    const sprite = this.buildSpriteFromTexture(fileName);
                    spriteMap[fileName] = sprite; 
                });
    
                resolve(spriteMap);
            });
        });
    }

    private buildSpriteFromTexture(fileName: string): Pixi.Sprite  {
        return new Pixi.Sprite(this.loader.resources[fileName].texture);
    }
}