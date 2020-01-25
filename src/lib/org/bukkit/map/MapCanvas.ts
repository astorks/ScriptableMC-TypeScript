declare var Java: any;
import {MapView} from '../../../org/bukkit/map/MapView.js'
import {MapCursorCollection} from '../../../org/bukkit/map/MapCursorCollection.js'
import {MapFont} from '../../../org/bukkit/map/MapFont.js'

export interface MapCanvas {
	getMapView(): MapView;
	getCursors(): MapCursorCollection;
	setCursors(arg0: MapCursorCollection): void;
	setPixel(arg0: number, arg1: number, arg2: number): void;
	getPixel(arg0: number, arg1: number): number;
	getBasePixel(arg0: number, arg1: number): number;
	drawImage(arg0: number, arg1: number, arg2: any): void;
	drawText(arg0: number, arg1: number, arg2: MapFont, arg3: string): void;
}

export class MapCanvas {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapCanvas');
	}
}

