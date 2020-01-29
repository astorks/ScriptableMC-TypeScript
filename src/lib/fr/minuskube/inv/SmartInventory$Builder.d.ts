import { SmartInventory } from '../../../fr/minuskube/inv/SmartInventory.js';
import { InventoryType } from '../../../org/bukkit/event/inventory/InventoryType.js';
import { InventoryProvider } from '../../../fr/minuskube/inv/content/InventoryProvider.js';
import { InventoryListener } from '../../../fr/minuskube/inv/InventoryListener.js';
import { InventoryManager } from '../../../fr/minuskube/inv/InventoryManager.js';
export interface SmartInventory$Builder {
    parent(parent: SmartInventory): SmartInventory$Builder;
    type(type: InventoryType): SmartInventory$Builder;
    size(rows: number, columns: number): SmartInventory$Builder;
    id(id: string): SmartInventory$Builder;
    provider(provider: InventoryProvider): SmartInventory$Builder;
    build(): SmartInventory;
    listener(listener: InventoryListener): SmartInventory$Builder;
    manager(manager: InventoryManager): SmartInventory$Builder;
    title(title: string): SmartInventory$Builder;
    closeable(closeable: boolean): SmartInventory$Builder;
}
export declare class SmartInventory$Builder {
    static get $javaClass(): any;
}
