import { MapView } from '../../../org/bukkit/map/MapView.js';
import { MapCanvas } from '../../../org/bukkit/map/MapCanvas.js';
import { Player } from '../../../org/bukkit/entity/Player.js';
export interface MapRenderer {
    initialize(map: MapView): void;
    isContextual(): boolean;
    render(arg0: MapView, arg1: MapCanvas, arg2: Player): void;
}
export declare class MapRenderer {
    static get $javaClass(): any;
    constructor();
    constructor(contextual: boolean);
}
