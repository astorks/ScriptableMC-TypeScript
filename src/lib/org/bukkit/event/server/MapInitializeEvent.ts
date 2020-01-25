declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {MapView} from '../../../../org/bukkit/map/MapView.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface MapInitializeEvent extends ServerEvent {
	getHandlers(): HandlerList;
	getMap(): MapView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class MapInitializeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.MapInitializeEvent');
	}
	constructor(mapView: MapView);
	constructor(...args: any[]) {
		return new MapInitializeEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return MapInitializeEvent.$javaClass.getHandlerList(...args);
	}
}

