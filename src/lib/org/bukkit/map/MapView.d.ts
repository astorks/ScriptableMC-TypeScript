import { World } from '../../../org/bukkit/World.js';
import { MapView$Scale } from '../../../org/bukkit/map/MapView$Scale.js';
import { MapRenderer } from '../../../org/bukkit/map/MapRenderer.js';
export interface MapView {
    getId(): number;
    isLocked(): boolean;
    getWorld(): World;
    setTrackingPosition(arg0: boolean): void;
    isUnlimitedTracking(): boolean;
    setUnlimitedTracking(arg0: boolean): void;
    setScale(arg0: MapView$Scale): void;
    getCenterX(): number;
    addRenderer(arg0: MapRenderer): void;
    setWorld(arg0: World): void;
    setCenterX(arg0: number): void;
    setLocked(arg0: boolean): void;
    isVirtual(): boolean;
    removeRenderer(arg0: MapRenderer): boolean;
    getScale(): MapView$Scale;
    isTrackingPosition(): boolean;
    getCenterZ(): number;
    getRenderers(): any;
    setCenterZ(arg0: number): void;
}
export declare class MapView {
    static get $javaClass(): any;
}
