import Egg from '../../../../org/bukkit/entity/Egg.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerEggThrowEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    isHatching(): boolean;
    getHatchingType(): EntityType;
    getEgg(): Egg;
    setHatchingType(hatchType: EntityType): void;
    getNumHatches(): number;
    setNumHatches(numHatches: number): void;
    setHatching(hatching: boolean): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerEggThrowEvent {
    static get $javaClass(): any;
    constructor(player: Player, egg: Egg, hatching: boolean, numHatches: number, hatchingType: EntityType);
    static getHandlerList(): HandlerList;
}
