declare var Java: any;

export default interface MapFont$CharacterSprite {
	get(row: number, col: number): boolean;
	getHeight(): number;
	getWidth(): number;
}

export default class MapFont$CharacterSprite {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapFont$CharacterSprite');
	}

	constructor(width: number, height: number, data: Array<boolean>);
	constructor(...args: any[]) {
		return new MapFont$CharacterSprite.$javaClass(...args);
	}

}

