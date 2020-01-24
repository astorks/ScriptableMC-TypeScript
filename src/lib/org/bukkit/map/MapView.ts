declare var Java: any;
import {World} from '../../../org/bukkit/World.js'
import {MapView$Scale} from '../../../org/bukkit/map/MapView$Scale.js'
import {MapRenderer} from '../../../org/bukkit/map/MapRenderer.js'

export interface MapView {
	getId(): number;
	isLocked(): boolean;
	isVirtual(): boolean;
	getWorld(): World;
	isUnlimitedTracking(): boolean;
	setUnlimitedTracking(unlimited: boolean): void;
	setTrackingPosition(trackingPosition: boolean): void;
	setWorld(world: World): void;
	getCenterZ(): number;
	getCenterX(): number;
	getRenderers(): any;
	getScale(): MapView$Scale;
	isTrackingPosition(): boolean;
	setCenterX(x: number): void;
	removeRenderer(renderer: MapRenderer): boolean;
	setLocked(locked: boolean): void;
	setScale(scale: MapView$Scale): void;
	setCenterZ(z: number): void;
	addRenderer(renderer: MapRenderer): void;
}

export class MapView {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapView');
	}
}

