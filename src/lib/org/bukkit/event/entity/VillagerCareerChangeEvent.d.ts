import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Villager from '../../../../org/bukkit/entity/Villager.js';
import Villager$Profession from '../../../../org/bukkit/entity/Villager$Profession.js';
import VillagerCareerChangeEvent$ChangeReason from '../../../../org/bukkit/event/entity/VillagerCareerChangeEvent$ChangeReason.js';
export default interface VillagerCareerChangeEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): Villager;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getReason(): VillagerCareerChangeEvent$ChangeReason;
    setProfession(profession: Villager$Profession): void;
    getProfession(): Villager$Profession;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class VillagerCareerChangeEvent {
    static get $javaClass(): any;
    constructor(what: Villager, profession: Villager$Profession, reason: VillagerCareerChangeEvent$ChangeReason);
    static getHandlerList(): HandlerList;
}
