export default interface MapFont$CharacterSprite {
    getHeight(): number;
    getWidth(): number;
    get(row: number, col: number): boolean;
}
export default class MapFont$CharacterSprite {
    static get $javaClass(): any;
    constructor(width: number, height: number, data: Array<boolean>);
}
