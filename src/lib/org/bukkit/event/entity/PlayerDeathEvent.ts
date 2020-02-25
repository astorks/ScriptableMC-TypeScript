declare var Java: any;
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityDeathEvent from '../../../../org/bukkit/event/entity/EntityDeathEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface PlayerDeathEvent extends EntityDeathEvent {
	getDeathMessage(): string;
	getDroppedExp(): number;
	getDrops(): Array<ItemStack>;
	getEntity(): Entity;
	getEntity(): LivingEntity;
	getEntity(): Player;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getKeepInventory(): boolean;
	getKeepLevel(): boolean;
	getNewExp(): number;
	getNewLevel(): number;
	getNewTotalExp(): number;
	isAsynchronous(): boolean;
	setDeathMessage(deathMessage: string): void;
	setDroppedExp(exp: number): void;
	setKeepInventory(keepInventory: boolean): void;
	setKeepLevel(keepLevel: boolean): void;
	setNewExp(exp: number): void;
	setNewLevel(level: number): void;
	setNewTotalExp(totalExp: number): void;
}

export default class PlayerDeathEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PlayerDeathEvent');
	}

	constructor(player: Player, drops: Array<any>, droppedExp: number, deathMessage: string);
	constructor(player: Player, drops: Array<any>, droppedExp: number, newExp: number, deathMessage: string);
	constructor(player: Player, drops: Array<any>, droppedExp: number, newExp: number, newTotalExp: number, newLevel: number, deathMessage: string);
	constructor(...args: any[]) {
		return new PlayerDeathEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerDeathEvent.$javaClass.getHandlerList(...args);
	}

}

