declare var Java: any;
import MapCanvas from '../../../org/bukkit/map/MapCanvas.js'
import MapView from '../../../org/bukkit/map/MapView.js'
import Player from '../../../org/bukkit/entity/Player.js'

export default interface MapRenderer {
	initialize(map: MapView): void;
	isContextual(): boolean;
	render(arg0: MapView, arg1: MapCanvas, arg2: Player): void;
}

export default class MapRenderer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.map.MapRenderer');
	}

	constructor();
	constructor(contextual: boolean);
	constructor(...args: any[]) {
		return new MapRenderer.$javaClass(...args);
	}

}

