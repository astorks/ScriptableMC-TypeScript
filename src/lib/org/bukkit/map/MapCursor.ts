declare var Java: any;
import {MapCursor$Type} from '../../../org/bukkit/map/MapCursor$Type.js'

export interface MapCursor {
	getType(): MapCursor$Type;
	getRawType(): number;
	setType(type: MapCursor$Type): void;
	getY(): number;
	setX(x: number): void;
	setY(y: number): void;
	getX(): number;
	setDirection(direction: number): void;
	getDirection(): number;
	setVisible(visible: boolean): void;
	isVisible(): boolean;
	getCaption(): string;
	setCaption(caption: string): void;
	setRawType(type: number): void;
}

export class MapCursor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapCursor');
	}
	constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean, caption: string);
	constructor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string);
	constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean);
	constructor(x: number, y: number, direction: number, type: number, visible: boolean);
	constructor(...args: any[]) {
		return new MapCursor.$javaClass(...args);
	}
}

