import { MapView } from '../../../org/bukkit/map/MapView.js';
import { MapFont } from '../../../org/bukkit/map/MapFont.js';
import { MapCursorCollection } from '../../../org/bukkit/map/MapCursorCollection.js';
export interface MapCanvas {
    getMapView(): MapView;
    getPixel(arg0: number, arg1: number): number;
    drawText(arg0: number, arg1: number, arg2: MapFont, arg3: string): void;
    setPixel(arg0: number, arg1: number, arg2: number): void;
    drawImage(arg0: number, arg1: number, arg2: any): void;
    getBasePixel(arg0: number, arg1: number): number;
    setCursors(arg0: MapCursorCollection): void;
    getCursors(): MapCursorCollection;
}
export declare class MapCanvas {
    static get $javaClass(): any;
}
