import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface SignChangeEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getLine(index: number): string;
    getLines(): Array<string>;
    setLine(index: number, line: string): void;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class SignChangeEvent {
    static get $javaClass(): any;
    constructor(theBlock: Block, thePlayer: Player, theLines: Array<string>);
    static getHandlerList(): HandlerList;
}
