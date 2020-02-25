declare var Java: any;
import InventoryContents from '../../../fr/minuskube/inv/content/InventoryContents.js'
import InventoryProvider from '../../../fr/minuskube/inv/content/InventoryProvider.js'
import Player from '../../../org/bukkit/entity/Player.js'

export default interface SmartInventoryProvider {
	init(player: Player, contents: InventoryContents): void;
	update(player: Player, contents: InventoryContents): void;
}

export default class SmartInventoryProvider {
	public static get $javaClass(): any {
		return Java.type('com.smc.smartinvs.SmartInventoryProvider');
	}

	constructor(scriptableObject: any);
	constructor(...args: any[]) {
		return new SmartInventoryProvider.$javaClass(...args);
	}

}

