import { PlayerPreLoginEvent$Result } from '../../../../org/bukkit/event/player/PlayerPreLoginEvent$Result.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { AsyncPlayerPreLoginEvent$Result } from '../../../../org/bukkit/event/player/AsyncPlayerPreLoginEvent$Result.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface AsyncPlayerPreLoginEvent extends Event {
    getName(): string;
    getAddress(): any;
    setResult(result: PlayerPreLoginEvent$Result): void;
    getUniqueId(): string;
    getResult(): PlayerPreLoginEvent$Result;
    getHandlers(): HandlerList;
    allow(): void;
    setKickMessage(message: string): void;
    setLoginResult(result: AsyncPlayerPreLoginEvent$Result): void;
    disallow(result: PlayerPreLoginEvent$Result, message: string): void;
    disallow(result: AsyncPlayerPreLoginEvent$Result, message: string): void;
    getKickMessage(): string;
    getLoginResult(): AsyncPlayerPreLoginEvent$Result;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class AsyncPlayerPreLoginEvent {
    static get $javaClass(): any;
    constructor(_name: string, ipAddress: any, uniqueId: string);
    constructor(_name: string, ipAddress: any);
    static getHandlerList(): HandlerList;
}
