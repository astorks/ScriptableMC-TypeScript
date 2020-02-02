import AsyncPlayerPreLoginEvent$Result from '../../../../org/bukkit/event/player/AsyncPlayerPreLoginEvent$Result.js';
import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import PlayerPreLoginEvent$Result from '../../../../org/bukkit/event/player/PlayerPreLoginEvent$Result.js';
export default interface AsyncPlayerPreLoginEvent extends Event {
    getHandlers(): HandlerList;
    getUniqueId(): string;
    setResult(result: PlayerPreLoginEvent$Result): void;
    getKickMessage(): string;
    setKickMessage(message: string): void;
    allow(): void;
    disallow(result: PlayerPreLoginEvent$Result, message: string): void;
    disallow(result: AsyncPlayerPreLoginEvent$Result, message: string): void;
    setLoginResult(result: AsyncPlayerPreLoginEvent$Result): void;
    getLoginResult(): AsyncPlayerPreLoginEvent$Result;
    getAddress(): any;
    getName(): string;
    getResult(): PlayerPreLoginEvent$Result;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class AsyncPlayerPreLoginEvent {
    static get $javaClass(): any;
    constructor(_name: string, ipAddress: any, uniqueId: string);
    constructor(_name: string, ipAddress: any);
    static getHandlerList(): HandlerList;
}
