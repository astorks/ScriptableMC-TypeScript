import { MapView } from '../../../org/bukkit/map/MapView.js';
import { MapCanvas } from '../../../org/bukkit/map/MapCanvas.js';
import { Player } from '../../../org/bukkit/entity/Player.js';
export interface MapRenderer {
    render(arg0: MapView, arg1: MapCanvas, arg2: Player): void;
    isContextual(): boolean;
    initialize(map: MapView): void;
}
export declare class MapRenderer {
    static get $javaClass(): any;
    constructor(contextual: boolean);
    constructor();
}
