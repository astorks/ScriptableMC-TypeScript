import Chunk from '../../../../org/bukkit/Chunk.js';
import ChunkEvent from '../../../../org/bukkit/event/world/ChunkEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import World from '../../../../org/bukkit/World.js';
export default interface ChunkLoadEvent extends ChunkEvent {
    getHandlers(): HandlerList;
    isNewChunk(): boolean;
    getChunk(): Chunk;
    getWorld(): World;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ChunkLoadEvent {
    static get $javaClass(): any;
    constructor(chunk: Chunk, newChunk: boolean);
    static getHandlerList(): HandlerList;
}
