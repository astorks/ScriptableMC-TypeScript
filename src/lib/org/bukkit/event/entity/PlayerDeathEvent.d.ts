import { LivingEntity } from '../../../../org/bukkit/entity/LivingEntity.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityDeathEvent } from '../../../../org/bukkit/event/entity/EntityDeathEvent.js';
export interface PlayerDeathEvent extends EntityDeathEvent {
    getEntity(): LivingEntity;
    getEntity(): Entity;
    getEntity(): Player;
    setNewLevel(level: number): void;
    getNewLevel(): number;
    setDeathMessage(deathMessage: string): void;
    setNewTotalExp(totalExp: number): void;
    setNewExp(exp: number): void;
    setKeepInventory(keepInventory: boolean): void;
    getKeepInventory(): boolean;
    getKeepLevel(): boolean;
    getDeathMessage(): string;
    getNewExp(): number;
    getNewTotalExp(): number;
    setKeepLevel(keepLevel: boolean): void;
    getHandlers(): HandlerList;
    getDrops(): any;
    setDroppedExp(exp: number): void;
    getDroppedExp(): number;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerDeathEvent {
    static get $javaClass(): any;
    constructor(player: Player, drops: any, droppedExp: number, newExp: number, newTotalExp: number, newLevel: number, deathMessage: string);
    constructor(player: Player, drops: any, droppedExp: number, newExp: number, deathMessage: string);
    constructor(player: Player, drops: any, droppedExp: number, deathMessage: string);
    static getHandlerList(): HandlerList;
}
