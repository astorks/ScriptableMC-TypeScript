import { ServerLoadEvent$LoadType } from '../../../../org/bukkit/event/server/ServerLoadEvent$LoadType.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ServerEvent } from '../../../../org/bukkit/event/server/ServerEvent.js';
export interface ServerLoadEvent extends ServerEvent {
    getType(): ServerLoadEvent$LoadType;
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class ServerLoadEvent {
    static get $javaClass(): any;
    constructor(type: ServerLoadEvent$LoadType);
    static getHandlerList(): HandlerList;
}
