declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import InventoryHolder from '../../../../org/bukkit/inventory/InventoryHolder.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import LootContext from '../../../../org/bukkit/loot/LootContext.js'
import LootTable from '../../../../org/bukkit/loot/LootTable.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from './WorldEvent.js'

export default interface LootGenerateEvent extends WorldEvent, Cancellable {
	getEntity(): Entity;
	getEventName(): string;
	getHandlers(): HandlerList;
	getInventoryHolder(): InventoryHolder;
	getLoot(): Array<ItemStack>;
	getLootContext(): LootContext;
	getLootTable(): LootTable;
	getWorld(): World;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isPlugin(): boolean;
	setCancelled(cancel: boolean): void;
	setLoot(loot: Array<any>): void;
}

export default class LootGenerateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.LootGenerateEvent');
	}

	constructor(world: World, entity: Entity, inventoryHolder: InventoryHolder, lootTable: LootTable, lootContext: LootContext, items: Array<any>, plugin: boolean);
	constructor(...args: any[]) {
		return new LootGenerateEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return LootGenerateEvent.$javaClass.getHandlerList(...args);
	}

}

