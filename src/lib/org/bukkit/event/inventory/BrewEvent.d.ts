import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import BrewerInventory from '../../../../org/bukkit/inventory/BrewerInventory.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BrewEvent extends BlockEvent, Cancellable {
    getContents(): BrewerInventory;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getFuelLevel(): number;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BrewEvent {
    static get $javaClass(): any;
    constructor(brewer: Block, contents: BrewerInventory, fuelLevel: number);
    static getHandlerList(): HandlerList;
}
