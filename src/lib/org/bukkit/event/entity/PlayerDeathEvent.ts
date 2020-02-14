declare var Java: any;
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityDeathEvent from '../../../../org/bukkit/event/entity/EntityDeathEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface PlayerDeathEvent extends EntityDeathEvent {
	getEntity(): Entity;
	getEntity(): LivingEntity;
	getEntity(): Player;
	getNewLevel(): number;
	setNewLevel(level: number): void;
	setDeathMessage(deathMessage: string): void;
	getDeathMessage(): string;
	getNewExp(): number;
	setNewExp(exp: number): void;
	getNewTotalExp(): number;
	setNewTotalExp(totalExp: number): void;
	getKeepLevel(): boolean;
	setKeepLevel(keepLevel: boolean): void;
	setKeepInventory(keepInventory: boolean): void;
	getKeepInventory(): boolean;
	getHandlers(): HandlerList;
	getDrops(): Array<ItemStack>;
	setDroppedExp(exp: number): void;
	getDroppedExp(): number;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class PlayerDeathEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PlayerDeathEvent');
	}
	constructor(player: Player, drops: Array<any>, droppedExp: number, newExp: number, deathMessage: string);
	constructor(player: Player, drops: Array<any>, droppedExp: number, deathMessage: string);
	constructor(player: Player, drops: Array<any>, droppedExp: number, newExp: number, newTotalExp: number, newLevel: number, deathMessage: string);
	constructor(...args: any[]) {
		return new PlayerDeathEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerDeathEvent.$javaClass.getHandlerList(...args);
	}
}

