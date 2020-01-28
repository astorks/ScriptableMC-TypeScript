import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { PlayerPreLoginEvent$Result } from '../../../../org/bukkit/event/player/PlayerPreLoginEvent$Result.js';
import { AsyncPlayerPreLoginEvent$Result } from '../../../../org/bukkit/event/player/AsyncPlayerPreLoginEvent$Result.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface AsyncPlayerPreLoginEvent extends Event {
    getHandlers(): HandlerList;
    getUniqueId(): string;
    setResult(result: PlayerPreLoginEvent$Result): void;
    setLoginResult(result: AsyncPlayerPreLoginEvent$Result): void;
    getLoginResult(): AsyncPlayerPreLoginEvent$Result;
    getKickMessage(): string;
    setKickMessage(message: string): void;
    allow(): void;
    disallow(result: AsyncPlayerPreLoginEvent$Result, message: string): void;
    disallow(result: PlayerPreLoginEvent$Result, message: string): void;
    getAddress(): any;
    getName(): string;
    getResult(): PlayerPreLoginEvent$Result;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class AsyncPlayerPreLoginEvent {
    static get $javaClass(): any;
    constructor(_name: string, ipAddress: any);
    constructor(_name: string, ipAddress: any, uniqueId: string);
    static getHandlerList(): HandlerList;
}
