declare var Java: any;
import {InventoryProvider} from '../../../fr/minuskube/inv/content/InventoryProvider.js'
import {InventoryManager} from '../../../fr/minuskube/inv/InventoryManager.js'
import {SmartInventory$Builder} from '../../../fr/minuskube/inv/SmartInventory$Builder.js'
import {Player} from '../../../org/bukkit/entity/Player.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'

export interface SmartInventory {
	getProvider(): InventoryProvider;
	getTitle(): string;
	getRows(): number;
	getColumns(): number;
	isCloseable(): boolean;
	setCloseable(closeable: boolean): void;
	getManager(): InventoryManager;
	getParent(): any;
	getId(): string;
	close(player: Player): void;
	getType(): InventoryType;
	open(player: Player, page: number): Inventory;
	open(player: Player): Inventory;
}

export class SmartInventory {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.SmartInventory');
	}
	public static builder(): SmartInventory$Builder;
	public static builder(...args: any[]): any {
		return SmartInventory.$javaClass.builder(...args);
	}
}
