import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { LivingEntity } from '../../../../org/bukkit/entity/LivingEntity.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityDeathEvent } from '../../../../org/bukkit/event/entity/EntityDeathEvent.js';
export interface PlayerDeathEvent extends EntityDeathEvent {
    getEntity(): Entity;
    getEntity(): LivingEntity;
    getEntity(): Player;
    getNewLevel(): number;
    setNewLevel(level: number): void;
    setDeathMessage(deathMessage: string): void;
    getDeathMessage(): string;
    getNewExp(): number;
    setNewExp(exp: number): void;
    getNewTotalExp(): number;
    setNewTotalExp(totalExp: number): void;
    getKeepLevel(): boolean;
    setKeepLevel(keepLevel: boolean): void;
    setKeepInventory(keepInventory: boolean): void;
    getKeepInventory(): boolean;
    getHandlers(): HandlerList;
    getDrops(): any;
    getDroppedExp(): number;
    setDroppedExp(exp: number): void;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerDeathEvent {
    static get $javaClass(): any;
    constructor(player: Player, drops: any, droppedExp: number, newExp: number, deathMessage: string);
    constructor(player: Player, drops: any, droppedExp: number, deathMessage: string);
    constructor(player: Player, drops: any, droppedExp: number, newExp: number, newTotalExp: number, newLevel: number, deathMessage: string);
    static getHandlerList(): HandlerList;
}
