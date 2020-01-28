import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { CachedServerIcon } from '../../../../org/bukkit/util/CachedServerIcon.js';
import { ServerEvent } from '../../../../org/bukkit/event/server/ServerEvent.js';
export interface ServerListPingEvent extends ServerEvent {
    getHandlers(): HandlerList;
    getMaxPlayers(): number;
    getMotd(): string;
    setMotd(motd: string): void;
    getNumPlayers(): number;
    setMaxPlayers(maxPlayers: number): void;
    setServerIcon(icon: CachedServerIcon): void;
    getAddress(): any;
    iterator(): any;
    isAsynchronous(): boolean;
    getEventName(): string;
    spliterator(): any;
    forEach(arg0: any): void;
}
export declare class ServerListPingEvent {
    static get $javaClass(): any;
    constructor(address: any, motd: string, numPlayers: number, maxPlayers: number);
    static getHandlerList(): HandlerList;
}
