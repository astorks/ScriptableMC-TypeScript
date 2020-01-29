import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Chunk } from '../../../../org/bukkit/Chunk.js';
import { World } from '../../../../org/bukkit/World.js';
import { ChunkEvent } from '../../../../org/bukkit/event/world/ChunkEvent.js';
export interface ChunkPopulateEvent extends ChunkEvent {
    getHandlers(): HandlerList;
    getChunk(): Chunk;
    getWorld(): World;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class ChunkPopulateEvent {
    static get $javaClass(): any;
    constructor(chunk: Chunk);
    static getHandlerList(): HandlerList;
}
