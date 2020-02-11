import MapCursorCollection from '../../../org/bukkit/map/MapCursorCollection.js';
import MapFont from '../../../org/bukkit/map/MapFont.js';
import MapView from '../../../org/bukkit/map/MapView.js';
export default interface MapCanvas {
    getBasePixel(arg0: number, arg1: number): number;
    drawImage(arg0: number, arg1: number, arg2: any): void;
    setCursors(arg0: MapCursorCollection): void;
    drawText(arg0: number, arg1: number, arg2: MapFont, arg3: string): void;
    getCursors(): MapCursorCollection;
    setPixel(arg0: number, arg1: number, arg2: number): void;
    getMapView(): MapView;
    getPixel(arg0: number, arg1: number): number;
}
export default class MapCanvas {
    static get $javaClass(): any;
}
