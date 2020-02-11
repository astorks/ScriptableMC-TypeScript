import MapFont from '../../../org/bukkit/map/MapFont.js';
import MapFont$CharacterSprite from '../../../org/bukkit/map/MapFont$CharacterSprite.js';
export default interface MinecraftFont extends MapFont {
    getChar(ch: string): MapFont$CharacterSprite;
    setChar(ch: string, sprite: MapFont$CharacterSprite): void;
    isValid(text: string): boolean;
    getHeight(): number;
    getWidth(text: string): number;
}
export default class MinecraftFont {
    static get $javaClass(): any;
    constructor();
    static get Font(): MinecraftFont;
}
