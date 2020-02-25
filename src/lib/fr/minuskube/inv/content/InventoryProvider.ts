declare var Java: any;
import InventoryContents from '../../../../fr/minuskube/inv/content/InventoryContents.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface InventoryProvider {
	init(arg0: Player, arg1: InventoryContents): void;
	update(arg0: Player, arg1: InventoryContents): void;
}

export default class InventoryProvider {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.InventoryProvider');
	}

}

