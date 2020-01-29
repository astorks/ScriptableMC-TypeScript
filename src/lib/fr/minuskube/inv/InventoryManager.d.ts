import { Player } from '../../../org/bukkit/entity/Player.js';
import { InventoryType } from '../../../org/bukkit/event/inventory/InventoryType.js';
import { InventoryOpener } from '../../../fr/minuskube/inv/opener/InventoryOpener.js';
import { SmartInventory } from '../../../fr/minuskube/inv/SmartInventory.js';
import { JavaPlugin } from '../../../org/bukkit/plugin/java/JavaPlugin.js';
export interface InventoryManager {
    init(): void;
    getInventory(p: Player): any;
    findOpener(type: InventoryType): any;
    getContents(p: Player): any;
    registerOpeners(openers: Array<InventoryOpener>): void;
    getOpenedPlayers(inv: SmartInventory): any;
}
export declare class InventoryManager {
    static get $javaClass(): any;
    constructor(plugin: JavaPlugin);
}
