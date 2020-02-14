declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Villager from '../../../../org/bukkit/entity/Villager.js'
import Villager$Profession from '../../../../org/bukkit/entity/Villager$Profession.js'
import VillagerCareerChangeEvent$ChangeReason from '../../../../org/bukkit/event/entity/VillagerCareerChangeEvent$ChangeReason.js'

export default interface VillagerCareerChangeEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): Villager;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getProfession(): Villager$Profession;
	getReason(): VillagerCareerChangeEvent$ChangeReason;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setProfession(profession: Villager$Profession): void;
}

export default class VillagerCareerChangeEvent {
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

