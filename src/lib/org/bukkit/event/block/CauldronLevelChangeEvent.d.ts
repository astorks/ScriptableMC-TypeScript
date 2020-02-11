import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import CauldronLevelChangeEvent$ChangeReason from '../../../../org/bukkit/event/block/CauldronLevelChangeEvent$ChangeReason.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface CauldronLevelChangeEvent extends BlockEvent, Cancellable {
    getEntity(): Entity;
    setCancelled(cancelled: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getReason(): CauldronLevelChangeEvent$ChangeReason;
    getNewLevel(): number;
    setNewLevel(newLevel: number): void;
    getOldLevel(): number;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class CauldronLevelChangeEvent {
    static get $javaClass(): any;
    constructor(block: Block, entity: Entity, reason: CauldronLevelChangeEvent$ChangeReason, oldLevel: number, newLevel: number);
    static getHandlerList(): HandlerList;
}
