import { Block } from '../../org/bukkit/block/Block.js';
import { World } from '../../org/bukkit/World.js';
import { Entity } from '../../org/bukkit/entity/Entity.js';
import { Plugin } from '../../org/bukkit/plugin/Plugin.js';
import { ChunkSnapshot } from '../../org/bukkit/ChunkSnapshot.js';
import { BlockState } from '../../org/bukkit/block/BlockState.js';
import { BlockData } from '../../org/bukkit/block/data/BlockData.js';
export interface Chunk {
    isLoaded(): boolean;
    getBlock(arg0: number, arg1: number, arg2: number): Block;
    getWorld(): World;
    getX(): number;
    getZ(): number;
    getEntities(): Array<Entity>;
    addPluginChunkTicket(arg0: Plugin): boolean;
    removePluginChunkTicket(arg0: Plugin): boolean;
    getPluginChunkTickets(): any;
    isSlimeChunk(): boolean;
    isForceLoaded(): boolean;
    setForceLoaded(arg0: boolean): void;
    getInhabitedTime(): number;
    setInhabitedTime(arg0: number): void;
    getChunkSnapshot(arg0: boolean, arg1: boolean, arg2: boolean): ChunkSnapshot;
    getChunkSnapshot(): ChunkSnapshot;
    getTileEntities(): Array<BlockState>;
    contains(arg0: BlockData): boolean;
    load(arg0: boolean): boolean;
    load(): boolean;
    unload(arg0: boolean): boolean;
    unload(): boolean;
}
export declare class Chunk {
    static get $javaClass(): any;
}
