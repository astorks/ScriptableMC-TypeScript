import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Egg } from '../../../../org/bukkit/entity/Egg.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerEggThrowEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getEgg(): Egg;
    isHatching(): boolean;
    setHatching(hatching: boolean): void;
    getHatchingType(): EntityType;
    setHatchingType(hatchType: EntityType): void;
    getNumHatches(): number;
    setNumHatches(numHatches: number): void;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerEggThrowEvent {
    static get $javaClass(): any;
    constructor(player: Player, egg: Egg, hatching: boolean, numHatches: number, hatchingType: EntityType);
    static getHandlerList(): HandlerList;
}
