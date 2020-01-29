import { SmartInventory$Builder } from '../../../fr/minuskube/inv/SmartInventory$Builder.js';
import { Player } from '../../../org/bukkit/entity/Player.js';
import { Inventory } from '../../../org/bukkit/inventory/Inventory.js';
import { InventoryType } from '../../../org/bukkit/event/inventory/InventoryType.js';
import { InventoryProvider } from '../../../fr/minuskube/inv/content/InventoryProvider.js';
import { InventoryManager } from '../../../fr/minuskube/inv/InventoryManager.js';
export interface SmartInventory {
    getParent(): any;
    getId(): string;
    close(player: Player): void;
    open(player: Player, page: number): Inventory;
    open(player: Player): Inventory;
    getType(): InventoryType;
    getProvider(): InventoryProvider;
    setCloseable(closeable: boolean): void;
    getColumns(): number;
    getManager(): InventoryManager;
    isCloseable(): boolean;
    getTitle(): string;
    getRows(): number;
}
export declare class SmartInventory {
    static get $javaClass(): any;
    static builder(): SmartInventory$Builder;
}
