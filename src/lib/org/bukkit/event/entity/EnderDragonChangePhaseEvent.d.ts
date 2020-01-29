import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EnderDragon } from '../../../../org/bukkit/entity/EnderDragon.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EnderDragon$Phase } from '../../../../org/bukkit/entity/EnderDragon$Phase.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EnderDragonChangePhaseEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): EnderDragon;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getCurrentPhase(): EnderDragon$Phase;
    setNewPhase(newPhase: EnderDragon$Phase): void;
    getNewPhase(): EnderDragon$Phase;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class EnderDragonChangePhaseEvent {
    static get $javaClass(): any;
    constructor(enderDragon: EnderDragon, currentPhase: EnderDragon$Phase, newPhase: EnderDragon$Phase);
    static getHandlerList(): HandlerList;
}
