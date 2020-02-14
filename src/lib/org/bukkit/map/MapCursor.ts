declare var Java: any;
import MapCursor$Type from '../../../org/bukkit/map/MapCursor$Type.js'

export default interface MapCursor {
	getCaption(): string;
	getDirection(): number;
	getRawType(): number;
	getType(): MapCursor$Type;
	getX(): number;
	getY(): number;
	isVisible(): boolean;
	setCaption(caption: string): void;
	setDirection(direction: number): void;
	setRawType(type: number): void;
	setType(type: MapCursor$Type): void;
	setVisible(visible: boolean): void;
	setX(x: number): void;
	setY(y: number): void;
}

export default class MapCursor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapCursor');
	}

	constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean);
	constructor(x: number, y: number, direction: number, type: number, visible: boolean);
	constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean, caption: string);
	constructor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string);
	constructor(...args: any[]) {
		return new MapCursor.$javaClass(...args);
	}

}

