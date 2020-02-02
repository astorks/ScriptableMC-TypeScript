import InventoryListener from '../../../fr/minuskube/inv/InventoryListener.js';
import InventoryManager from '../../../fr/minuskube/inv/InventoryManager.js';
import InventoryProvider from '../../../fr/minuskube/inv/content/InventoryProvider.js';
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js';
import SmartInventory from '../../../fr/minuskube/inv/SmartInventory.js';
export default interface SmartInventory$Builder {
    parent(parent: SmartInventory): SmartInventory$Builder;
    type(type: InventoryType): SmartInventory$Builder;
    size(rows: number, columns: number): SmartInventory$Builder;
    id(id: string): SmartInventory$Builder;
    provider(provider: InventoryProvider): SmartInventory$Builder;
    build(): SmartInventory;
    title(title: string): SmartInventory$Builder;
    closeable(closeable: boolean): SmartInventory$Builder;
    manager(manager: InventoryManager): SmartInventory$Builder;
    listener(listener: InventoryListener): SmartInventory$Builder;
}
export default class SmartInventory$Builder {
    static get $javaClass(): any;
}