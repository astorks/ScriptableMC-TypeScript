import InventoryContents from '../../../../fr/minuskube/inv/content/InventoryContents.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface InventoryProvider {
    update(arg0: Player, arg1: InventoryContents): void;
    init(arg0: Player, arg1: InventoryContents): void;
}
export default class InventoryProvider {
    static get $javaClass(): any;
}
