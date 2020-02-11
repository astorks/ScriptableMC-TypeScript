import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityDeathEvent from '../../../../org/bukkit/event/entity/EntityDeathEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface PlayerDeathEvent extends EntityDeathEvent {
    getEntity(): LivingEntity;
    getEntity(): Entity;
    getEntity(): Player;
    getNewLevel(): number;
    setNewLevel(level: number): void;
    getKeepLevel(): boolean;
    getDeathMessage(): string;
    setNewExp(exp: number): void;
    setNewTotalExp(totalExp: number): void;
    setKeepInventory(keepInventory: boolean): void;
    setDeathMessage(deathMessage: string): void;
    getNewExp(): number;
    setKeepLevel(keepLevel: boolean): void;
    getNewTotalExp(): number;
    getKeepInventory(): boolean;
    getHandlers(): HandlerList;
    getDrops(): Array<ItemStack>;
    getDroppedExp(): number;
    setDroppedExp(exp: number): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerDeathEvent {
    static get $javaClass(): any;
    constructor(player: Player, drops: Array<any>, droppedExp: number, newExp: number, newTotalExp: number, newLevel: number, deathMessage: string);
    constructor(player: Player, drops: Array<any>, droppedExp: number, newExp: number, deathMessage: string);
    constructor(player: Player, drops: Array<any>, droppedExp: number, deathMessage: string);
    static getHandlerList(): HandlerList;
}
