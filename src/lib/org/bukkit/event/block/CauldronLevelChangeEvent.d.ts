import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import CauldronLevelChangeEvent$ChangeReason from '../../../../org/bukkit/event/block/CauldronLevelChangeEvent$ChangeReason.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface CauldronLevelChangeEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    getNewLevel(): number;
    setNewLevel(newLevel: number): void;
    getOldLevel(): number;
    getReason(): CauldronLevelChangeEvent$ChangeReason;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class CauldronLevelChangeEvent {
    static get $javaClass(): any;
    constructor(block: Block, entity: Entity, reason: CauldronLevelChangeEvent$ChangeReason, oldLevel: number, newLevel: number);
    static getHandlerList(): HandlerList;
}
