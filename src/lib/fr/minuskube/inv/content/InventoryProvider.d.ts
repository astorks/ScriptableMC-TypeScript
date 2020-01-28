import { Player } from '../../../../org/bukkit/entity/Player.js';
import { InventoryContents } from '../../../../fr/minuskube/inv/content/InventoryContents.js';
export interface InventoryProvider {
    update(arg0: Player, arg1: InventoryContents): void;
    init(arg0: Player, arg1: InventoryContents): void;
}
export declare class InventoryProvider {
    static get $javaClass(): any;
}
