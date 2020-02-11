import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface BrewingStandFuelEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isConsuming(): boolean;
    setConsuming(consuming: boolean): void;
    getFuelPower(): number;
    setFuelPower(fuelPower: number): void;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getFuel(): ItemStack;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BrewingStandFuelEvent {
    static get $javaClass(): any;
    constructor(brewingStand: Block, fuel: ItemStack, fuelPower: number);
    static getHandlerList(): HandlerList;
}
