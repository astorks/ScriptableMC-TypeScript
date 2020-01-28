import { Player } from '../../../../org/bukkit/entity/Player.js';
import { InventoryContents } from '../../../../fr/minuskube/inv/content/InventoryContents.js';
export interface SmartInventoryProvider {
    update(player: Player, contents: InventoryContents): void;
    init(player: Player, contents: InventoryContents): void;
}
export declare class SmartInventoryProvider {
    static get $javaClass(): any;
    constructor(scriptableObject: any);
}
