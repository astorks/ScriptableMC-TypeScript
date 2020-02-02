import InventoryOpener from '../../../fr/minuskube/inv/opener/InventoryOpener.js';
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js';
import JavaPlugin from '../../../org/bukkit/plugin/java/JavaPlugin.js';
import Player from '../../../org/bukkit/entity/Player.js';
import SmartInventory from '../../../fr/minuskube/inv/SmartInventory.js';
export default interface InventoryManager {
    init(): void;
    getInventory(p: Player): any;
    findOpener(type: InventoryType): any;
    getContents(p: Player): any;
    getOpenedPlayers(inv: SmartInventory): any;
    registerOpeners(openers: Array<InventoryOpener>): void;
}
export default class InventoryManager {
    static get $javaClass(): any;
    constructor(plugin: JavaPlugin);
}
