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
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getCurrentPhase(): EnderDragon$Phase;
    getNewPhase(): EnderDragon$Phase;
    setNewPhase(newPhase: EnderDragon$Phase): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EnderDragonChangePhaseEvent {
    static get $javaClass(): any;
    constructor(enderDragon: EnderDragon, currentPhase: EnderDragon$Phase, newPhase: EnderDragon$Phase);
    static getHandlerList(): HandlerList;
}
