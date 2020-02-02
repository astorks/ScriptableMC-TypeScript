import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface SignChangeEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getLine(index: number): string;
    setLine(index: number, line: string): void;
    getLines(): Array<string>;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class SignChangeEvent {
    static get $javaClass(): any;
    constructor(theBlock: Block, thePlayer: Player, theLines: Array<string>);
    static getHandlerList(): HandlerList;
}
