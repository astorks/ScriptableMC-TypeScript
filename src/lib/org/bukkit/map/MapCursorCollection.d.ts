import MapCursor from '../../../org/bukkit/map/MapCursor.js';
export default interface MapCursorCollection {
    size(): number;
    getCursor(index: number): MapCursor;
    removeCursor(cursor: MapCursor): boolean;
    addCursor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string): MapCursor;
    addCursor(x: number, y: number, direction: number, type: number, visible: boolean): MapCursor;
    addCursor(x: number, y: number, direction: number, type: number): MapCursor;
    addCursor(x: number, y: number, direction: number): MapCursor;
    addCursor(cursor: MapCursor): MapCursor;
}
export default class MapCursorCollection {
    static get $javaClass(): any;
    constructor();
}
