import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityDeathEvent from '../../../../org/bukkit/event/entity/EntityDeathEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface PlayerDeathEvent extends EntityDeathEvent {
    getEntity(): LivingEntity;
    getEntity(): Entity;
    getEntity(): Player;
    getNewTotalExp(): number;
    getNewExp(): number;
    setKeepLevel(keepLevel: boolean): void;
    getDeathMessage(): string;
    getKeepLevel(): boolean;
    setNewTotalExp(totalExp: number): void;
    setNewExp(exp: number): void;
    setKeepInventory(keepInventory: boolean): void;
    setDeathMessage(deathMessage: string): void;
    getKeepInventory(): boolean;
    setNewLevel(level: number): void;
    getNewLevel(): number;
    getHandlers(): HandlerList;
    getDrops(): any;
    getDroppedExp(): number;
    setDroppedExp(exp: number): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerDeathEvent {
    static get $javaClass(): any;
    constructor(player: Player, drops: any, droppedExp: number, newExp: number, newTotalExp: number, newLevel: number, deathMessage: string);
    constructor(player: Player, drops: any, droppedExp: number, newExp: number, deathMessage: string);
    constructor(player: Player, drops: any, droppedExp: number, deathMessage: string);
    static getHandlerList(): HandlerList;
}
