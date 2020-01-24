declare var Java: any;
import {MapCursorCollection} from '../../../org/bukkit/map/MapCursorCollection.js'
import {MapFont} from '../../../org/bukkit/map/MapFont.js'
import {MapView} from '../../../org/bukkit/map/MapView.js'

export interface MapCanvas {
	getCursors(): MapCursorCollection;
	getPixel(x: number, y: number): number;
	drawText(x: number, y: number, font: MapFont, text: string): void;
	getBasePixel(x: number, y: number): number;
	setCursors(cursors: MapCursorCollection): void;
	setPixel(x: number, y: number, color: number): void;
	drawImage(x: number, y: number, image: any): void;
	getMapView(): MapView;
}

export class MapCanvas {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapCanvas');
	}
}

