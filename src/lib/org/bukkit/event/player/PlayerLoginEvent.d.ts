import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { PlayerLoginEvent$Result } from '../../../../org/bukkit/event/player/PlayerLoginEvent$Result.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerLoginEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    setResult(result: PlayerLoginEvent$Result): void;
    getKickMessage(): string;
    setKickMessage(message: string): void;
    allow(): void;
    disallow(result: PlayerLoginEvent$Result, message: string): void;
    getHostname(): string;
    getRealAddress(): any;
    getAddress(): any;
    getResult(): PlayerLoginEvent$Result;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerLoginEvent {
    static get $javaClass(): any;
    constructor(player: Player, hostname: string, address: any, realAddress: any);
    constructor(player: Player, hostname: string, address: any, result: PlayerLoginEvent$Result, message: string, realAddress: any);
    constructor(player: Player, hostname: string, address: any);
    static getHandlerList(): HandlerList;
}
