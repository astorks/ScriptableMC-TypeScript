import MapRenderer from '../../../org/bukkit/map/MapRenderer.js';
import MapView$Scale from '../../../org/bukkit/map/MapView$Scale.js';
import World from '../../../org/bukkit/World.js';
export default interface MapView {
    getId(): number;
    isLocked(): boolean;
    getWorld(): World;
    setUnlimitedTracking(arg0: boolean): void;
    isUnlimitedTracking(): boolean;
    setTrackingPosition(arg0: boolean): void;
    getScale(): MapView$Scale;
    getCenterX(): number;
    setWorld(arg0: World): void;
    getRenderers(): Array<MapRenderer>;
    addRenderer(arg0: MapRenderer): void;
    setScale(arg0: MapView$Scale): void;
    removeRenderer(arg0: MapRenderer): boolean;
    setLocked(arg0: boolean): void;
    setCenterZ(arg0: number): void;
    getCenterZ(): number;
    isVirtual(): boolean;
    setCenterX(arg0: number): void;
    isTrackingPosition(): boolean;
}
export default class MapView {
    static get $javaClass(): any;
}
