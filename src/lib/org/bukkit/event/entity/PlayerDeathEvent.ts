declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityDeathEvent} from '../../../../org/bukkit/event/entity/EntityDeathEvent.js'

export interface PlayerDeathEvent extends EntityDeathEvent {
	getEntity(): Entity;
	getEntity(): LivingEntity;
	getEntity(): Player;
	setNewLevel(level: number): void;
	getNewLevel(): number;
	getDeathMessage(): string;
	setKeepInventory(keepInventory: boolean): void;
	getNewExp(): number;
	setNewExp(exp: number): void;
	setNewTotalExp(totalExp: number): void;
	getKeepInventory(): boolean;
	getNewTotalExp(): number;
	getKeepLevel(): boolean;
	setKeepLevel(keepLevel: boolean): void;
	setDeathMessage(deathMessage: string): void;
	getHandlers(): HandlerList;
	getDrops(): any;
	setDroppedExp(exp: number): void;
	getDroppedExp(): number;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerDeathEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PlayerDeathEvent');
	}
	constructor(player: Player, drops: any, droppedExp: number, newExp: number, newTotalExp: number, newLevel: number, deathMessage: string);
	constructor(player: Player, drops: any, droppedExp: number, newExp: number, deathMessage: string);
	constructor(player: Player, drops: any, droppedExp: number, deathMessage: string);
	constructor(...args: any[]) {
		return new PlayerDeathEvent.$javaClass(...args);
	}
}

