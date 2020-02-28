declare var Java: any;
import MapCursorCollection from './MapCursorCollection.js'
import MapFont from './MapFont.js'
import MapView from './MapView.js'

export default interface MapCanvas {
	drawImage(arg0: number, arg1: number, arg2: any): void;
	drawText(arg0: number, arg1: number, arg2: MapFont, arg3: string): void;
	getBasePixel(arg0: number, arg1: number): number;
	getCursors(): MapCursorCollection;
	getMapView(): MapView;
	getPixel(arg0: number, arg1: number): number;
	setCursors(arg0: MapCursorCollection): void;
	setPixel(arg0: number, arg1: number, arg2: number): void;
}

export default class MapCanvas {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapCanvas');
	}

}

