import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { CauldronLevelChangeEvent$ChangeReason } from '../../../../org/bukkit/event/block/CauldronLevelChangeEvent$ChangeReason.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface CauldronLevelChangeEvent extends BlockEvent, Cancellable {
    getEntity(): Entity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    getReason(): CauldronLevelChangeEvent$ChangeReason;
    getOldLevel(): number;
    setNewLevel(newLevel: number): void;
    getNewLevel(): number;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class CauldronLevelChangeEvent {
    static get $javaClass(): any;
    constructor(block: Block, entity: Entity, reason: CauldronLevelChangeEvent$ChangeReason, oldLevel: number, newLevel: number);
    static getHandlerList(): HandlerList;
}
