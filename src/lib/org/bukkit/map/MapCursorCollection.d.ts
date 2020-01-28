import { MapCursor } from '../../../org/bukkit/map/MapCursor.js';
export interface MapCursorCollection {
    getCursor(index: number): MapCursor;
    removeCursor(cursor: MapCursor): boolean;
    addCursor(x: number, y: number, direction: number): MapCursor;
    addCursor(x: number, y: number, direction: number, type: number, visible: boolean): MapCursor;
    addCursor(x: number, y: number, direction: number, type: number): MapCursor;
    addCursor(cursor: MapCursor): MapCursor;
    addCursor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string): MapCursor;
    size(): number;
}
export declare class MapCursorCollection {
    static get $javaClass(): any;
    constructor();
}
