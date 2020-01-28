export interface MapFont$CharacterSprite {
    getHeight(): number;
    getWidth(): number;
    get(row: number, col: number): boolean;
}
export declare class MapFont$CharacterSprite {
    static get $javaClass(): any;
    constructor(width: number, height: number, data: Array<boolean>);
}
