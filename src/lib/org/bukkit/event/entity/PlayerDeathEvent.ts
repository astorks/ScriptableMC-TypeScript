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
	getNewLevel(): number;
	setNewLevel(level: number): void;
	setNewExp(exp: number): void;
	getDeathMessage(): string;
	getNewExp(): number;
	setKeepLevel(keepLevel: boolean): void;
	setDeathMessage(deathMessage: string): void;
	getNewTotalExp(): number;
	setNewTotalExp(totalExp: number): void;
	getKeepLevel(): boolean;
	setKeepInventory(keepInventory: boolean): void;
	getKeepInventory(): boolean;
	getHandlers(): HandlerList;
	getDrops(): any;
	setDroppedExp(exp: number): void;
	getDroppedExp(): number;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
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

