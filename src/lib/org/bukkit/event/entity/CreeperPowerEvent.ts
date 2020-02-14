declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Creeper from '../../../../org/bukkit/entity/Creeper.js'
import CreeperPowerEvent$PowerCause from '../../../../org/bukkit/event/entity/CreeperPowerEvent$PowerCause.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LightningStrike from '../../../../org/bukkit/entity/LightningStrike.js'

export default interface CreeperPowerEvent extends EntityEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Creeper;
	setCancelled(cancel: boolean): void;
	getLightning(): LightningStrike;
	getCause(): CreeperPowerEvent$PowerCause;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class CreeperPowerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.CreeperPowerEvent');
	}
	constructor(creeper: Creeper, bolt: LightningStrike, cause: CreeperPowerEvent$PowerCause);
	constructor(creeper: Creeper, cause: CreeperPowerEvent$PowerCause);
	constructor(...args: any[]) {
		return new CreeperPowerEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return CreeperPowerEvent.$javaClass.getHandlerList(...args);
	}
}

