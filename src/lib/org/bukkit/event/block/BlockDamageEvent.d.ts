import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockDamageEvent extends BlockEvent, Cancellable {
    getItemInHand(): ItemStack;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getInstaBreak(): boolean;
    setInstaBreak(bool: boolean): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class BlockDamageEvent {
    static get $javaClass(): any;
    constructor(player: Player, block: Block, itemInHand: ItemStack, instaBreak: boolean);
    static getHandlerList(): HandlerList;
}
