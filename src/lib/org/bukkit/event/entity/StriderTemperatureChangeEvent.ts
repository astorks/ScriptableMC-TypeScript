declare var Java: any;
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Strider from '../../../../org/bukkit/entity/Strider.js'

export default interface StriderTemperatureChangeEvent extends EntityEvent {
	getEntity(): Strider;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isShivering(): boolean;
}

export default class StriderTemperatureChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.StriderTemperatureChangeEvent');
	}

	constructor(what: Strider, shivering: boolean);
	constructor(...args: any[]) {
		return new StriderTemperatureChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return StriderTemperatureChangeEvent.$javaClass.getHandlerList(...args);
	}

}

