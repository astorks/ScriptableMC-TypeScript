import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EnderDragon } from '../../../../org/bukkit/entity/EnderDragon.js';
import { EnderDragon$Phase } from '../../../../org/bukkit/entity/EnderDragon$Phase.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EnderDragonChangePhaseEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntity(): EnderDragon;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setNewPhase(newPhase: EnderDragon$Phase): void;
    getCurrentPhase(): EnderDragon$Phase;
    getNewPhase(): EnderDragon$Phase;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EnderDragonChangePhaseEvent {
    static get $javaClass(): any;
    constructor(enderDragon: EnderDragon, currentPhase: EnderDragon$Phase, newPhase: EnderDragon$Phase);
    static getHandlerList(): HandlerList;
}
