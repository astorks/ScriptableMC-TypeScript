import Block from '../../../../org/bukkit/block/Block.js';
import BlockExpEvent from '../../../../org/bukkit/event/block/BlockExpEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface BlockBreakEvent extends BlockExpEvent, Cancellable {
    getPlayer(): Player;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    setDropItems(dropItems: boolean): void;
    isDropItems(): boolean;
    getHandlers(): HandlerList;
    setExpToDrop(exp: number): void;
    getExpToDrop(): number;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockBreakEvent {
    static get $javaClass(): any;
    constructor(theBlock: Block, player: Player);
    static getHandlerList(): HandlerList;
}
