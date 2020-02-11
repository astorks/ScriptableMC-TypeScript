import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Material from '../../../../org/bukkit/Material.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
import Statistic from '../../../../org/bukkit/Statistic.js';
export default interface PlayerStatisticIncrementEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    getStatistic(): Statistic;
    getMaterial(): Material;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    getNewValue(): number;
    getPreviousValue(): number;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerStatisticIncrementEvent {
    static get $javaClass(): any;
    constructor(player: Player, statistic: Statistic, initialValue: number, newValue: number, entityType: EntityType);
    constructor(player: Player, statistic: Statistic, initialValue: number, newValue: number);
    constructor(player: Player, statistic: Statistic, initialValue: number, newValue: number, material: Material);
    static getHandlerList(): HandlerList;
}
