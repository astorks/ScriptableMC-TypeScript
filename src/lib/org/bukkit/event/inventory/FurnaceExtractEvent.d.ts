import Block from '../../../../org/bukkit/block/Block.js';
import BlockExpEvent from '../../../../org/bukkit/event/block/BlockExpEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Material from '../../../../org/bukkit/Material.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface FurnaceExtractEvent extends BlockExpEvent {
    getPlayer(): Player;
    getItemType(): Material;
    getItemAmount(): number;
    getHandlers(): HandlerList;
    setExpToDrop(exp: number): void;
    getExpToDrop(): number;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class FurnaceExtractEvent {
    static get $javaClass(): any;
    constructor(player: Player, block: Block, itemType: Material, itemAmount: number, exp: number);
    static getHandlerList(): HandlerList;
}
