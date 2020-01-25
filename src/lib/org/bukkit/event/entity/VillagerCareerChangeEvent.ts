declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Villager} from '../../../../org/bukkit/entity/Villager.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Villager$Profession} from '../../../../org/bukkit/entity/Villager$Profession.js'
import {VillagerCareerChangeEvent$ChangeReason} from '../../../../org/bukkit/event/entity/VillagerCareerChangeEvent$ChangeReason.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface VillagerCareerChangeEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Villager;
	getEntity(): Entity;
	setProfession(profession: Villager$Profession): void;
	getProfession(): Villager$Profession;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getReason(): VillagerCareerChangeEvent$ChangeReason;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class VillagerCareerChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.VillagerCareerChangeEvent');
	}
	constructor(what: Villager, profession: Villager$Profession, reason: VillagerCareerChangeEvent$ChangeReason);
	constructor(...args: any[]) {
		return new VillagerCareerChangeEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VillagerCareerChangeEvent.$javaClass.getHandlerList(...args);
	}
}

