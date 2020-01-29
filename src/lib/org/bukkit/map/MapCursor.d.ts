import { MapCursor$Type } from '../../../org/bukkit/map/MapCursor$Type.js';
export interface MapCursor {
    getType(): MapCursor$Type;
    getRawType(): number;
    setType(type: MapCursor$Type): void;
    setDirection(direction: number): void;
    getX(): number;
    getY(): number;
    setX(x: number): void;
    setY(y: number): void;
    getDirection(): number;
    setVisible(visible: boolean): void;
    isVisible(): boolean;
    setCaption(caption: string): void;
    setRawType(type: number): void;
    getCaption(): string;
}
export declare class MapCursor {
    static get $javaClass(): any;
    constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean, caption: string);
    constructor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string);
    constructor(x: number, y: number, direction: number, type: MapCursor$Type, visible: boolean);
    constructor(x: number, y: number, direction: number, type: number, visible: boolean);
}
