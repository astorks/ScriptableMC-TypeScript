import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerBedLeaveEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    setSpawnLocation(setBedSpawn: boolean): void;
    getBed(): Block;
    shouldSetSpawnLocation(): boolean;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerBedLeaveEvent {
    static get $javaClass(): any;
    constructor(who: Player, bed: Block, setBedSpawn: boolean);
    static getHandlerList(): HandlerList;
}
