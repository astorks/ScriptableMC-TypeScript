import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Egg } from '../../../../org/bukkit/entity/Egg.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerEggThrowEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getNumHatches(): number;
    getHatchingType(): EntityType;
    setHatchingType(hatchType: EntityType): void;
    isHatching(): boolean;
    setNumHatches(numHatches: number): void;
    setHatching(hatching: boolean): void;
    getEgg(): Egg;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerEggThrowEvent {
    static get $javaClass(): any;
    constructor(player: Player, egg: Egg, hatching: boolean, numHatches: number, hatchingType: EntityType);
    static getHandlerList(): HandlerList;
}
