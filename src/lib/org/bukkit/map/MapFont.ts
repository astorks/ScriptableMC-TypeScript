declare var Java: any;
import MapFont$CharacterSprite from '../../../org/bukkit/map/MapFont$CharacterSprite.js'

export default interface MapFont {
	getChar(ch: string): MapFont$CharacterSprite;
	getHeight(): number;
	getWidth(text: string): number;
	isValid(text: string): boolean;
	setChar(ch: string, sprite: MapFont$CharacterSprite): void;
}

export default class MapFont {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapFont');
	}

	constructor();
	constructor(...args: any[]) {
		return new MapFont.$javaClass(...args);
	}

}

