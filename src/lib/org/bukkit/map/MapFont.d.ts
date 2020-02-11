import MapFont$CharacterSprite from '../../../org/bukkit/map/MapFont$CharacterSprite.js';
export default interface MapFont {
    getChar(ch: string): MapFont$CharacterSprite;
    setChar(ch: string, sprite: MapFont$CharacterSprite): void;
    isValid(text: string): boolean;
    getHeight(): number;
    getWidth(text: string): number;
}
export default class MapFont {
    static get $javaClass(): any;
    constructor();
}
