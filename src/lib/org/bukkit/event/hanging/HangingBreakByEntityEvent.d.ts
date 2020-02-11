import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Hanging from '../../../../org/bukkit/entity/Hanging.js';
import HangingBreakEvent from '../../../../org/bukkit/event/hanging/HangingBreakEvent.js';
import HangingBreakEvent$RemoveCause from '../../../../org/bukkit/event/hanging/HangingBreakEvent$RemoveCause.js';
export default interface HangingBreakByEntityEvent extends HangingBreakEvent {
    getRemover(): Entity;
    getCause(): HangingBreakEvent$RemoveCause;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getEntity(): Hanging;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class HangingBreakByEntityEvent {
    static get $javaClass(): any;
    constructor(hanging: Hanging, remover: Entity);
    constructor(hanging: Hanging, remover: Entity, cause: HangingBreakEvent$RemoveCause);
    static getHandlerList(): HandlerList;
}
