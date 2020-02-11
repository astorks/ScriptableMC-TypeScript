import MapRenderer from '../../../org/bukkit/map/MapRenderer.js';
import MapView$Scale from '../../../org/bukkit/map/MapView$Scale.js';
import World from '../../../org/bukkit/World.js';
export default interface MapView {
    getId(): number;
    isLocked(): boolean;
    getWorld(): World;
    isUnlimitedTracking(): boolean;
    setTrackingPosition(arg0: boolean): void;
    setUnlimitedTracking(arg0: boolean): void;
    getScale(): MapView$Scale;
    setScale(arg0: MapView$Scale): void;
    addRenderer(arg0: MapRenderer): void;
    setWorld(arg0: World): void;
    removeRenderer(arg0: MapRenderer): boolean;
    isVirtual(): boolean;
    setLocked(arg0: boolean): void;
    setCenterX(arg0: number): void;
    getCenterX(): number;
    getCenterZ(): number;
    setCenterZ(arg0: number): void;
    getRenderers(): Array<MapRenderer>;
    isTrackingPosition(): boolean;
}
export default class MapView {
    static get $javaClass(): any;
}
