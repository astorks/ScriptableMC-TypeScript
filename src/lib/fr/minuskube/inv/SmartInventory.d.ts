import Inventory from '../../../org/bukkit/inventory/Inventory.js';
import InventoryManager from '../../../fr/minuskube/inv/InventoryManager.js';
import InventoryProvider from '../../../fr/minuskube/inv/content/InventoryProvider.js';
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js';
import Player from '../../../org/bukkit/entity/Player.js';
import SmartInventory$Builder from '../../../fr/minuskube/inv/SmartInventory$Builder.js';
export default interface SmartInventory {
    getParent(): any;
    getId(): string;
    close(player: Player): void;
    open(player: Player, page: number): Inventory;
    open(player: Player): Inventory;
    getType(): InventoryType;
    getProvider(): InventoryProvider;
    getRows(): number;
    getColumns(): number;
    isCloseable(): boolean;
    getManager(): InventoryManager;
    setCloseable(closeable: boolean): void;
    getTitle(): string;
}
export default class SmartInventory {
    static get $javaClass(): any;
    static builder(): SmartInventory$Builder;
}
