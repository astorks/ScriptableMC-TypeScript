declare var Java: any;
import {InventoryType} from '../../../../org/bukkit/event/inventory/InventoryType.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryContents} from '../../../../fr/minuskube/inv/content/InventoryContents.js'
import {SmartInventory} from '../../../../fr/minuskube/inv/SmartInventory.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'

export interface InventoryOpener {
	supports(arg0: InventoryType): boolean;
	fill(handle: Inventory, contents: InventoryContents): void;
	open(arg0: SmartInventory, arg1: Player): Inventory;
}

export class InventoryOpener {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.opener.InventoryOpener');
	}
}

