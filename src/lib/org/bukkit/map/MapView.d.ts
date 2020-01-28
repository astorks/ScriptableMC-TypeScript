import { World } from '../../../org/bukkit/World.js';
import { MapView$Scale } from '../../../org/bukkit/map/MapView$Scale.js';
import { MapRenderer } from '../../../org/bukkit/map/MapRenderer.js';
export interface MapView {
    isLocked(): boolean;
    getWorld(): World;
    setWorld(arg0: World): void;
    isVirtual(): boolean;
    getScale(): MapView$Scale;
    setLocked(arg0: boolean): void;
    setScale(arg0: MapView$Scale): void;
    getCenterX(): number;
    getCenterZ(): number;
    setCenterX(arg0: number): void;
    setCenterZ(arg0: number): void;
    getRenderers(): any;
    addRenderer(arg0: MapRenderer): void;
    removeRenderer(arg0: MapRenderer): boolean;
    isTrackingPosition(): boolean;
    setTrackingPosition(arg0: boolean): void;
    isUnlimitedTracking(): boolean;
    setUnlimitedTracking(arg0: boolean): void;
    getId(): number;
}
export declare class MapView {
    static get $javaClass(): any;
}
