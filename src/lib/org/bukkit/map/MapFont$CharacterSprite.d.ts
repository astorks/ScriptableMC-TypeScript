export interface MapFont$CharacterSprite {
    get(row: number, col: number): boolean;
    getHeight(): number;
    getWidth(): number;
}
export declare class MapFont$CharacterSprite {
    static get $javaClass(): any;
    constructor(width: number, height: number, data: Array<boolean>);
}
