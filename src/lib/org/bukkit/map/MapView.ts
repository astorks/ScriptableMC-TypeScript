declare var Java: any;
import {World} from '../../../org/bukkit/World.js'
import {MapView$Scale} from '../../../org/bukkit/map/MapView$Scale.js'
import {MapRenderer} from '../../../org/bukkit/map/MapRenderer.js'

export interface MapView {
	isLocked(): boolean;
	getWorld(): World;
	setWorld(arg0: World): void;
	getScale(): MapView$Scale;
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
	setLocked(arg0: boolean): void;
	isVirtual(): boolean;
	getId(): number;
}

export class MapView {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapView');
	}
}

