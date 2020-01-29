import { Block } from '../../../../org/bukkit/block/Block.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { BlockFace } from '../../../../org/bukkit/block/BlockFace.js';
import { Hanging } from '../../../../org/bukkit/entity/Hanging.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { HangingEvent } from '../../../../org/bukkit/event/hanging/HangingEvent.js';
export interface HangingPlaceEvent extends HangingEvent, Cancellable {
    getBlock(): Block;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBlockFace(): BlockFace;
    getEntity(): Hanging;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class HangingPlaceEvent {
    static get $javaClass(): any;
    constructor(hanging: Hanging, player: Player, block: Block, blockFace: BlockFace);
    static getHandlerList(): HandlerList;
}
