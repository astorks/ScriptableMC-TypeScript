declare var Java: any;
import MapCursor from '../../../org/bukkit/map/MapCursor.js'

export default interface MapCursorCollection {
	getCursor(index: number): MapCursor;
	removeCursor(cursor: MapCursor): boolean;
	addCursor(x: number, y: number, direction: number): MapCursor;
	addCursor(x: number, y: number, direction: number, type: number, visible: boolean): MapCursor;
	addCursor(x: number, y: number, direction: number, type: number): MapCursor;
	addCursor(cursor: MapCursor): MapCursor;
	addCursor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string): MapCursor;
	size(): number;
}

export default class MapCursorCollection {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapCursorCollection');
	}
	constructor();
	constructor(...args: any[]) {
		return new MapCursorCollection.$javaClass(...args);
	}
}

