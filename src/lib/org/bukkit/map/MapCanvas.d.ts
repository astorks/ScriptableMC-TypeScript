import MapCursorCollection from '../../../org/bukkit/map/MapCursorCollection.js';
import MapFont from '../../../org/bukkit/map/MapFont.js';
import MapView from '../../../org/bukkit/map/MapView.js';
export default interface MapCanvas {
    drawText(arg0: number, arg1: number, arg2: MapFont, arg3: string): void;
    drawImage(arg0: number, arg1: number, arg2: any): void;
    setPixel(arg0: number, arg1: number, arg2: number): void;
    getPixel(arg0: number, arg1: number): number;
    getBasePixel(arg0: number, arg1: number): number;
    getMapView(): MapView;
    getCursors(): MapCursorCollection;
    setCursors(arg0: MapCursorCollection): void;
}
export default class MapCanvas {
    static get $javaClass(): any;
}
