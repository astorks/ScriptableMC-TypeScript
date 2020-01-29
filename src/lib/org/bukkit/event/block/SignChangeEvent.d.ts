import { Player } from '../../../../org/bukkit/entity/Player.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface SignChangeEvent extends BlockEvent, Cancellable {
    getPlayer(): Player;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getLines(): Array<string>;
    setLine(index: number, line: string): void;
    getLine(index: number): string;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class SignChangeEvent {
    static get $javaClass(): any;
    constructor(theBlock: Block, thePlayer: Player, theLines: Array<string>);
    static getHandlerList(): HandlerList;
}
