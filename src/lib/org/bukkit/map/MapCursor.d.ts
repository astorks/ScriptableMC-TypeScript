import MapCursor$Type from '../../../org/bukkit/map/MapCursor$Type.js';
export default interface MapCursor {
    getType(): MapCursor$Type;
    getRawType(): number;
    setType(type: MapCursor$Type): void;
    setVisible(visible: boolean): void;
    isVisible(): boolean;
    setDirection(direction: number): void;
    setX(x: number): void;
    getDirection(): number;
    getY(): number;
    setY(y: number): void;
    getX(): number;
    setRawType(type: number): void;
    setCaption(caption: string): void;
    getCaption(): string;
}
export default class MapCursor {
    static get $javaClass(): any;
    constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean, caption: string);
    constructor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string);
    constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean);
    constructor(x: number, y: number, direction: number, type: number, visible: boolean);
}
