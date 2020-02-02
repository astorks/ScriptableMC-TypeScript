import CachedServerIcon from '../../../../org/bukkit/util/CachedServerIcon.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ServerEvent from '../../../../org/bukkit/event/server/ServerEvent.js';
export default interface ServerListPingEvent extends ServerEvent {
    iterator(): any;
    getAddress(): any;
    getMaxPlayers(): number;
    getMotd(): string;
    getHandlers(): HandlerList;
    getNumPlayers(): number;
    setMotd(motd: string): void;
    setMaxPlayers(maxPlayers: number): void;
    setServerIcon(icon: CachedServerIcon): void;
    getEventName(): string;
    isAsynchronous(): boolean;
    spliterator(): any;
    forEach(action: any): void;
}
export default class ServerListPingEvent {
    static get $javaClass(): any;
    constructor(address: any, motd: string, numPlayers: number, maxPlayers: number);
    static getHandlerList(): HandlerList;
}
