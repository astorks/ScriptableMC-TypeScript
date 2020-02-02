import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import EnderDragon from '../../../../org/bukkit/entity/EnderDragon.js';
import EnderDragon$Phase from '../../../../org/bukkit/entity/EnderDragon$Phase.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EnderDragonChangePhaseEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): EnderDragon;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setNewPhase(newPhase: EnderDragon$Phase): void;
    getCurrentPhase(): EnderDragon$Phase;
    getNewPhase(): EnderDragon$Phase;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EnderDragonChangePhaseEvent {
    static get $javaClass(): any;
    constructor(enderDragon: EnderDragon, currentPhase: EnderDragon$Phase, newPhase: EnderDragon$Phase);
    static getHandlerList(): HandlerList;
}
