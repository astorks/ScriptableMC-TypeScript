import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Chunk } from '../../../../org/bukkit/Chunk.js';
import { World } from '../../../../org/bukkit/World.js';
import { ChunkEvent } from '../../../../org/bukkit/event/world/ChunkEvent.js';
export interface ChunkUnloadEvent extends ChunkEvent {
    getHandlers(): HandlerList;
    isSaveChunk(): boolean;
    setSaveChunk(saveChunk: boolean): void;
    getChunk(): Chunk;
    getWorld(): World;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class ChunkUnloadEvent {
    static get $javaClass(): any;
    constructor(chunk: Chunk);
    constructor(chunk: Chunk, save: boolean);
    static getHandlerList(): HandlerList;
}
