import Block from '../../org/bukkit/block/Block.js';
import BlockData from '../../org/bukkit/block/data/BlockData.js';
import BlockState from '../../org/bukkit/block/BlockState.js';
import ChunkSnapshot from '../../org/bukkit/ChunkSnapshot.js';
import Entity from '../../org/bukkit/entity/Entity.js';
import Plugin from '../../org/bukkit/plugin/Plugin.js';
import World from '../../org/bukkit/World.js';
export default interface Chunk {
    contains(arg0: BlockData): boolean;
    load(): boolean;
    load(arg0: boolean): boolean;
    unload(): boolean;
    unload(arg0: boolean): boolean;
    isLoaded(): boolean;
    getWorld(): World;
    getBlock(arg0: number, arg1: number, arg2: number): Block;
    getPluginChunkTickets(): any;
    addPluginChunkTicket(arg0: Plugin): boolean;
    removePluginChunkTicket(arg0: Plugin): boolean;
    getTileEntities(): Array<BlockState>;
    getChunkSnapshot(arg0: boolean, arg1: boolean, arg2: boolean): ChunkSnapshot;
    getChunkSnapshot(): ChunkSnapshot;
    isSlimeChunk(): boolean;
    setInhabitedTime(arg0: number): void;
    setForceLoaded(arg0: boolean): void;
    isForceLoaded(): boolean;
    getInhabitedTime(): number;
    getEntities(): Array<Entity>;
    getX(): number;
    getZ(): number;
}
export default class Chunk {
    static get $javaClass(): any;
}
