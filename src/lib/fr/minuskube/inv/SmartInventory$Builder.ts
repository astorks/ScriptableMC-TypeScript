declare var Java: any;
import InventoryListener from '../../../fr/minuskube/inv/InventoryListener.js'
import InventoryManager from '../../../fr/minuskube/inv/InventoryManager.js'
import InventoryProvider from '../../../fr/minuskube/inv/content/InventoryProvider.js'
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js'
import SmartInventory from '../../../fr/minuskube/inv/SmartInventory.js'

export default interface SmartInventory$Builder {
	build(): SmartInventory;
	closeable(closeable: boolean): SmartInventory$Builder;
	id(id: string): SmartInventory$Builder;
	listener(listener: InventoryListener): SmartInventory$Builder;
	manager(manager: InventoryManager): SmartInventory$Builder;
	parent(parent: SmartInventory): SmartInventory$Builder;
	provider(provider: InventoryProvider): SmartInventory$Builder;
	size(rows: number, columns: number): SmartInventory$Builder;
	title(title: string): SmartInventory$Builder;
	type(type: InventoryType): SmartInventory$Builder;
}

export default class SmartInventory$Builder {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.SmartInventory$Builder');
	}

}

