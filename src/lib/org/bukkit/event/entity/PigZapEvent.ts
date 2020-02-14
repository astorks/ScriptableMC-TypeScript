declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityTransformEvent from '../../../../org/bukkit/event/entity/EntityTransformEvent.js'
import EntityTransformEvent$TransformReason from '../../../../org/bukkit/event/entity/EntityTransformEvent$TransformReason.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LightningStrike from '../../../../org/bukkit/entity/LightningStrike.js'
import Pig from '../../../../org/bukkit/entity/Pig.js'
import PigZombie from '../../../../org/bukkit/entity/PigZombie.js'

export default interface PigZapEvent extends EntityTransformEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	getEntity(): Pig;
	getEntity(): Entity;
	setCancelled(cancel: boolean): void;
	getLightning(): LightningStrike;
	getPigZombie(): PigZombie;
	getTransformedEntity(): Entity;
	getTransformedEntities(): Array<Entity>;
	getTransformReason(): EntityTransformEvent$TransformReason;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class PigZapEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PigZapEvent');
	}
	constructor(pig: Pig, bolt: LightningStrike, pigzombie: PigZombie);
	constructor(...args: any[]) {
		return new PigZapEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PigZapEvent.$javaClass.getHandlerList(...args);
	}
}

