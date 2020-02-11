import MapCursor$Type from '../../../org/bukkit/map/MapCursor$Type.js';
export default interface MapCursor {
    getType(): MapCursor$Type;
    getRawType(): number;
    setX(x: number): void;
    getX(): number;
    setY(y: number): void;
    getY(): number;
    getDirection(): number;
    setDirection(direction: number): void;
    setType(type: MapCursor$Type): void;
    isVisible(): boolean;
    setVisible(visible: boolean): void;
    setCaption(caption: string): void;
    setRawType(type: number): void;
    getCaption(): string;
}
export default class MapCursor {
    static get $javaClass(): any;
    constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean, caption: string);
    constructor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string);
    constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean);
    constructor(x: number, y: number, direction: number, type: number, visible: boolean);
}
