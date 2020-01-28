import { InventoryListener } from '../../../fr/minuskube/inv/InventoryListener.js';
import { InventoryManager } from '../../../fr/minuskube/inv/InventoryManager.js';
import { SmartInventory } from '../../../fr/minuskube/inv/SmartInventory.js';
import { InventoryType } from '../../../org/bukkit/event/inventory/InventoryType.js';
import { InventoryProvider } from '../../../fr/minuskube/inv/content/InventoryProvider.js';
export interface SmartInventory$Builder {
    title(title: string): SmartInventory$Builder;
    listener(listener: InventoryListener): SmartInventory$Builder;
    closeable(closeable: boolean): SmartInventory$Builder;
    manager(manager: InventoryManager): SmartInventory$Builder;
    build(): SmartInventory;
    parent(parent: SmartInventory): SmartInventory$Builder;
    type(type: InventoryType): SmartInventory$Builder;
    size(rows: number, columns: number): SmartInventory$Builder;
    provider(provider: InventoryProvider): SmartInventory$Builder;
    id(id: string): SmartInventory$Builder;
}
export declare class SmartInventory$Builder {
    static get $javaClass(): any;
}
