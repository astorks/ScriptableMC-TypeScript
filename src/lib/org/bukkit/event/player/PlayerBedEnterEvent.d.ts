import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { PlayerBedEnterEvent$BedEnterResult } from '../../../../org/bukkit/event/player/PlayerBedEnterEvent$BedEnterResult.js';
import { Event$Result } from '../../../../org/bukkit/event/Event$Result.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerBedEnterEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBedEnterResult(): PlayerBedEnterEvent$BedEnterResult;
    useBed(): Event$Result;
    getBed(): Block;
    setUseBed(useBed: Event$Result): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerBedEnterEvent {
    static get $javaClass(): any;
    constructor(who: Player, bed: Block);
    constructor(who: Player, bed: Block, bedEnterResult: PlayerBedEnterEvent$BedEnterResult);
    static getHandlerList(): HandlerList;
}
