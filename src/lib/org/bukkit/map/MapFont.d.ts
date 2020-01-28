import { MapFont$CharacterSprite } from '../../../org/bukkit/map/MapFont$CharacterSprite.js';
export interface MapFont {
    isValid(text: string): boolean;
    getHeight(): number;
    getWidth(text: string): number;
    getChar(ch: string): MapFont$CharacterSprite;
    setChar(ch: string, sprite: MapFont$CharacterSprite): void;
}
export declare class MapFont {
    static get $javaClass(): any;
    constructor();
}
