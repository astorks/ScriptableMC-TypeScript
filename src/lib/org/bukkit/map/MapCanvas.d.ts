import MapCursorCollection from '../../../org/bukkit/map/MapCursorCollection.js';
import MapFont from '../../../org/bukkit/map/MapFont.js';
import MapView from '../../../org/bukkit/map/MapView.js';
export default interface MapCanvas {
    setPixel(arg0: number, arg1: number, arg2: number): void;
    drawImage(arg0: number, arg1: number, arg2: any): void;
    getPixel(arg0: number, arg1: number): number;
    getBasePixel(arg0: number, arg1: number): number;
    setCursors(arg0: MapCursorCollection): void;
    drawText(arg0: number, arg1: number, arg2: MapFont, arg3: string): void;
    getCursors(): MapCursorCollection;
    getMapView(): MapView;
}
export default class MapCanvas {
    static get $javaClass(): any;
}
