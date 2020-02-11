import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import PlayerPreLoginEvent$Result from '../../../../org/bukkit/event/player/PlayerPreLoginEvent$Result.js';
export default interface PlayerPreLoginEvent extends Event {
    getName(): string;
    getAddress(): any;
    setResult(result: PlayerPreLoginEvent$Result): void;
    getHandlers(): HandlerList;
    getUniqueId(): string;
    getResult(): PlayerPreLoginEvent$Result;
    allow(): void;
    getKickMessage(): string;
    setKickMessage(message: string): void;
    disallow(result: PlayerPreLoginEvent$Result, message: string): void;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerPreLoginEvent {
    static get $javaClass(): any;
    constructor(_name: string, ipAddress: any, uniqueId: string);
    constructor(_name: string, ipAddress: any);
    static getHandlerList(): HandlerList;
}
