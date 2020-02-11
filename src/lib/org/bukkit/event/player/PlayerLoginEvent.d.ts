import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
import PlayerLoginEvent$Result from '../../../../org/bukkit/event/player/PlayerLoginEvent$Result.js';
export default interface PlayerLoginEvent extends PlayerEvent {
    getAddress(): any;
    setResult(result: PlayerLoginEvent$Result): void;
    getResult(): PlayerLoginEvent$Result;
    getHandlers(): HandlerList;
    getHostname(): string;
    getRealAddress(): any;
    setKickMessage(message: string): void;
    disallow(result: PlayerLoginEvent$Result, message: string): void;
    getKickMessage(): string;
    allow(): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerLoginEvent {
    static get $javaClass(): any;
    constructor(player: Player, hostname: string, address: any);
    constructor(player: Player, hostname: string, address: any, realAddress: any);
    constructor(player: Player, hostname: string, address: any, result: PlayerLoginEvent$Result, message: string, realAddress: any);
    static getHandlerList(): HandlerList;
}
