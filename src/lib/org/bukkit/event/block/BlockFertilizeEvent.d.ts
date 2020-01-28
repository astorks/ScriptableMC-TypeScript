import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockFertilizeEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    getBlocks(): any;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class BlockFertilizeEvent {
    static get $javaClass(): any;
    constructor(theBlock: Block, player: Player, blocks: any);
    static getHandlerList(): HandlerList;
}
