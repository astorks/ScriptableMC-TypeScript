import MapRenderer from '../../../org/bukkit/map/MapRenderer.js';
import MapView$Scale from '../../../org/bukkit/map/MapView$Scale.js';
import World from '../../../org/bukkit/World.js';
export default interface MapView {
    getId(): number;
    isLocked(): boolean;
    getWorld(): World;
    setCenterZ(arg0: number): void;
    setWorld(arg0: World): void;
    addRenderer(arg0: MapRenderer): void;
    setLocked(arg0: boolean): void;
    getScale(): MapView$Scale;
    getCenterZ(): number;
    setCenterX(arg0: number): void;
    getCenterX(): number;
    getRenderers(): any;
    removeRenderer(arg0: MapRenderer): boolean;
    isTrackingPosition(): boolean;
    isVirtual(): boolean;
    setScale(arg0: MapView$Scale): void;
    setUnlimitedTracking(arg0: boolean): void;
    isUnlimitedTracking(): boolean;
    setTrackingPosition(arg0: boolean): void;
}
export default class MapView {
    static get $javaClass(): any;
}
