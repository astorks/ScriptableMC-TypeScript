declare var Java: any;
import MapRenderer from '../../../org/bukkit/map/MapRenderer.js'
import MapView$Scale from '../../../org/bukkit/map/MapView$Scale.js'
import World from '../../../org/bukkit/World.js'

export default interface MapView {
	addRenderer(arg0: MapRenderer): void;
	getCenterX(): number;
	getCenterZ(): number;
	getId(): number;
	getRenderers(): Array<MapRenderer>;
	getScale(): MapView$Scale;
	getWorld(): World;
	isLocked(): boolean;
	isTrackingPosition(): boolean;
	isUnlimitedTracking(): boolean;
	isVirtual(): boolean;
	removeRenderer(arg0: MapRenderer): boolean;
	setCenterX(arg0: number): void;
	setCenterZ(arg0: number): void;
	setLocked(arg0: boolean): void;
	setScale(arg0: MapView$Scale): void;
	setTrackingPosition(arg0: boolean): void;
	setUnlimitedTracking(arg0: boolean): void;
	setWorld(arg0: World): void;
}

export default class MapView {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapView');
	}

}

