import { Statistic } from '../../../../org/bukkit/Statistic.js';
import { Material } from '../../../../org/bukkit/Material.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerStatisticIncrementEvent extends PlayerEvent, Cancellable {
    getStatistic(): Statistic;
    getMaterial(): Material;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    getPreviousValue(): number;
    getNewValue(): number;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerStatisticIncrementEvent {
    static get $javaClass(): any;
    constructor(player: Player, statistic: Statistic, initialValue: number, newValue: number, entityType: EntityType);
    constructor(player: Player, statistic: Statistic, initialValue: number, newValue: number);
    constructor(player: Player, statistic: Statistic, initialValue: number, newValue: number, material: Material);
    static getHandlerList(): HandlerList;
}
