import { BlockData } from '../../org/bukkit/block/data/BlockData.js';
import { Block } from '../../org/bukkit/block/Block.js';
import { World } from '../../org/bukkit/World.js';
import { Plugin } from '../../org/bukkit/plugin/Plugin.js';
import { Entity } from '../../org/bukkit/entity/Entity.js';
import { ChunkSnapshot } from '../../org/bukkit/ChunkSnapshot.js';
import { BlockState } from '../../org/bukkit/block/BlockState.js';
export interface Chunk {
    contains(arg0: BlockData): boolean;
    load(arg0: boolean): boolean;
    load(): boolean;
    isLoaded(): boolean;
    unload(): boolean;
    unload(arg0: boolean): boolean;
    getBlock(arg0: number, arg1: number, arg2: number): Block;
    getWorld(): World;
    getPluginChunkTickets(): any;
    addPluginChunkTicket(arg0: Plugin): boolean;
    removePluginChunkTicket(arg0: Plugin): boolean;
    getEntities(): Array<Entity>;
    getX(): number;
    getZ(): number;
    isSlimeChunk(): boolean;
    setForceLoaded(arg0: boolean): void;
    getChunkSnapshot(arg0: boolean, arg1: boolean, arg2: boolean): ChunkSnapshot;
    getChunkSnapshot(): ChunkSnapshot;
    getTileEntities(): Array<BlockState>;
    setInhabitedTime(arg0: number): void;
    isForceLoaded(): boolean;
    getInhabitedTime(): number;
}
export declare class Chunk {
    static get $javaClass(): any;
}
