declare var Java: any;
import InventoryOpener from '../../../fr/minuskube/inv/opener/InventoryOpener.js'
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js'
import JavaPlugin from '../../../org/bukkit/plugin/java/JavaPlugin.js'
import Player from '../../../org/bukkit/entity/Player.js'
import SmartInventory from '../../../fr/minuskube/inv/SmartInventory.js'

export default interface InventoryManager {
	findOpener(type: InventoryType): any;
	getContents(p: Player): any;
	getInventory(p: Player): any;
	getOpenedPlayers(inv: SmartInventory): Array<Player>;
	init(): void;
	registerOpeners(openers: Array<InventoryOpener>): void;
}

export default class InventoryManager {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.InventoryManager');
	}

	constructor(plugin: JavaPlugin);
	constructor(...args: any[]) {
		return new InventoryManager.$javaClass(...args);
	}

}

