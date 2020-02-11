import InventoryContents from '../../../fr/minuskube/inv/content/InventoryContents.js';
import Player from '../../../org/bukkit/entity/Player.js';
export default interface SmartInventoryProvider {
    update(player: Player, contents: InventoryContents): void;
    init(player: Player, contents: InventoryContents): void;
}
export default class SmartInventoryProvider {
    static get $javaClass(): any;
    constructor(scriptableObject: any);
}
