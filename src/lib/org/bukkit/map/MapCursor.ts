declare var Java: any;
import MapCursor$Type from '../../../org/bukkit/map/MapCursor$Type.js'

export default interface MapCursor {
	setType(type: MapCursor$Type): void;
	setX(x: number): void;
	getX(): number;
	setY(y: number): void;
	getY(): number;
	getDirection(): number;
	setDirection(direction: number): void;
	setVisible(visible: boolean): void;
	isVisible(): boolean;
	getCaption(): string;
	setCaption(caption: string): void;
	setRawType(type: number): void;
	getType(): MapCursor$Type;
	getRawType(): number;
}

export default class MapCursor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapCursor');
	}
	constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean);
	constructor(x: number, y: number, direction: number, type: number, visible: boolean);
	constructor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string);
	constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean, caption: string);
	constructor(...args: any[]) {
		return new MapCursor.$javaClass(...args);
	}
}

