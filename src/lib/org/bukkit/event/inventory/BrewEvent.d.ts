import { BrewerInventory } from '../../../../org/bukkit/inventory/BrewerInventory.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BrewEvent extends BlockEvent, Cancellable {
    getContents(): BrewerInventory;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getFuelLevel(): number;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class BrewEvent {
    static get $javaClass(): any;
    constructor(brewer: Block, contents: BrewerInventory, fuelLevel: number);
    static getHandlerList(): HandlerList;
}
