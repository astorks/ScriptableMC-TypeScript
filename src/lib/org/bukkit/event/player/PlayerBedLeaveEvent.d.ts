import Block from '../../../../org/bukkit/block/Block.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerBedLeaveEvent extends PlayerEvent {
    setSpawnLocation(setBedSpawn: boolean): void;
    getHandlers(): HandlerList;
    getBed(): Block;
    shouldSetSpawnLocation(): boolean;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerBedLeaveEvent {
    static get $javaClass(): any;
    constructor(who: Player, bed: Block, setBedSpawn: boolean);
    static getHandlerList(): HandlerList;
}