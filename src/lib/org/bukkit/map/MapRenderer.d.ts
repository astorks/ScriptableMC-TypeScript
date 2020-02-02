import MapCanvas from '../../../org/bukkit/map/MapCanvas.js';
import MapView from '../../../org/bukkit/map/MapView.js';
import Player from '../../../org/bukkit/entity/Player.js';
export default interface MapRenderer {
    isContextual(): boolean;
    render(arg0: MapView, arg1: MapCanvas, arg2: Player): void;
    initialize(map: MapView): void;
}
export default class MapRenderer {
    static get $javaClass(): any;
    constructor(contextual: boolean);
    constructor();
}
