declare var Java: any;
import MapFont from './MapFont.js'
import MapFont$CharacterSprite from './MapFont$CharacterSprite.js'

export default interface MinecraftFont extends MapFont {
	getChar(ch: string): MapFont$CharacterSprite;
	getHeight(): number;
	getWidth(text: string): number;
	isValid(text: string): boolean;
	setChar(ch: string, sprite: MapFont$CharacterSprite): void;
}

export default class MinecraftFont {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MinecraftFont');
	}

	constructor();
	constructor(...args: any[]) {
		return new MinecraftFont.$javaClass(...args);
	}

	public static get Font(): MinecraftFont {
		return MinecraftFont.$javaClass.Font;
	}

}

