declare var Java: any;
import {Player} from '../../../org/bukkit/entity/Player.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {InventoryOpener} from '../../../fr/minuskube/inv/opener/InventoryOpener.js'
import {SmartInventory} from '../../../fr/minuskube/inv/SmartInventory.js'
import {JavaPlugin} from '../../../org/bukkit/plugin/java/JavaPlugin.js'

export interface InventoryManager {
	getInventory(p: Player): any;
	findOpener(type: InventoryType): any;
	getContents(p: Player): any;
	registerOpeners(openers: Array<InventoryOpener>): void;
	getOpenedPlayers(inv: SmartInventory): any;
	init(): void;
}

export class InventoryManager {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.InventoryManager');
	}
	constructor(plugin: JavaPlugin);
	constructor(...args: any[]) {
		return new InventoryManager.$javaClass(...args);
	}
}

