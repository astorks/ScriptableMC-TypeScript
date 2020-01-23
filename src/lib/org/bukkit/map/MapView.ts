declare var Java: any;
import {World} from '../../../org/bukkit/World.js'
import {MapView$Scale} from '../../../org/bukkit/map/MapView$Scale.js'
import {MapRenderer} from '../../../org/bukkit/map/MapRenderer.js'

export interface MapView {
	getId(): number;
	isLocked(): boolean;
	isVirtual(): boolean;
	getWorld(): World;
	setTrackingPosition(trackingPosition: boolean): void;
	setUnlimitedTracking(unlimited: boolean): void;
	isUnlimitedTracking(): boolean;
	setScale(scale: MapView$Scale): void;
	getRenderers(): any;
	getCenterX(): number;
	setCenterZ(z: number): void;
	setLocked(locked: boolean): void;
	getScale(): MapView$Scale;
	getCenterZ(): number;
	setWorld(world: World): void;
	isTrackingPosition(): boolean;
	removeRenderer(renderer: MapRenderer): boolean;
	setCenterX(x: number): void;
	addRenderer(renderer: MapRenderer): void;
}

export class MapView {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapView');
	}
}

