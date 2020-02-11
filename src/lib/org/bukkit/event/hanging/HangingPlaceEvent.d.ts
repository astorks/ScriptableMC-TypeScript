import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Hanging from '../../../../org/bukkit/entity/Hanging.js';
import HangingEvent from '../../../../org/bukkit/event/hanging/HangingEvent.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface HangingPlaceEvent extends HangingEvent, Cancellable {
    getPlayer(): Player;
    getBlock(): Block;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getBlockFace(): BlockFace;
    getEntity(): Hanging;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class HangingPlaceEvent {
    static get $javaClass(): any;
    constructor(hanging: Hanging, player: Player, block: Block, blockFace: BlockFace);
    static getHandlerList(): HandlerList;
}
