import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Creeper from '../../../../org/bukkit/entity/Creeper.js';
import CreeperPowerEvent$PowerCause from '../../../../org/bukkit/event/entity/CreeperPowerEvent$PowerCause.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LightningStrike from '../../../../org/bukkit/entity/LightningStrike.js';
export default interface CreeperPowerEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntity(): Creeper;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getLightning(): LightningStrike;
    getCause(): CreeperPowerEvent$PowerCause;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class CreeperPowerEvent {
    static get $javaClass(): any;
    constructor(creeper: Creeper, bolt: LightningStrike, cause: CreeperPowerEvent$PowerCause);
    constructor(creeper: Creeper, cause: CreeperPowerEvent$PowerCause);
    static getHandlerList(): HandlerList;
}
