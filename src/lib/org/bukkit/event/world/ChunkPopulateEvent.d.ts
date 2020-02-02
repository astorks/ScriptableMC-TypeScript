import Chunk from '../../../../org/bukkit/Chunk.js';
import ChunkEvent from '../../../../org/bukkit/event/world/ChunkEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import World from '../../../../org/bukkit/World.js';
export default interface ChunkPopulateEvent extends ChunkEvent {
    getHandlers(): HandlerList;
    getChunk(): Chunk;
    getWorld(): World;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ChunkPopulateEvent {
    static get $javaClass(): any;
    constructor(chunk: Chunk);
    static getHandlerList(): HandlerList;
}
