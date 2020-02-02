import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ServerEvent from '../../../../org/bukkit/event/server/ServerEvent.js';
import ServerLoadEvent$LoadType from '../../../../org/bukkit/event/server/ServerLoadEvent$LoadType.js';
export default interface ServerLoadEvent extends ServerEvent {
    getHandlers(): HandlerList;
    getType(): ServerLoadEvent$LoadType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ServerLoadEvent {
    static get $javaClass(): any;
    constructor(type: ServerLoadEvent$LoadType);
    static getHandlerList(): HandlerList;
}
