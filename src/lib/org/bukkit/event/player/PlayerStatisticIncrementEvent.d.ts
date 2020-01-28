import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Material } from '../../../../org/bukkit/Material.js';
import { Statistic } from '../../../../org/bukkit/Statistic.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerStatisticIncrementEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    getMaterial(): Material;
    getStatistic(): Statistic;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    getPreviousValue(): number;
    getNewValue(): number;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerStatisticIncrementEvent {
    static get $javaClass(): any;
    constructor(player: Player, statistic: Statistic, initialValue: number, newValue: number);
    constructor(player: Player, statistic: Statistic, initialValue: number, newValue: number, entityType: EntityType);
    constructor(player: Player, statistic: Statistic, initialValue: number, newValue: number, material: Material);
    static getHandlerList(): HandlerList;
}
