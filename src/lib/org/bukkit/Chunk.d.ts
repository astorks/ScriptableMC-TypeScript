import Block from '../../org/bukkit/block/Block.js';
import BlockData from '../../org/bukkit/block/data/BlockData.js';
import BlockState from '../../org/bukkit/block/BlockState.js';
import ChunkSnapshot from '../../org/bukkit/ChunkSnapshot.js';
import Entity from '../../org/bukkit/entity/Entity.js';
import Plugin from '../../org/bukkit/plugin/Plugin.js';
import World from '../../org/bukkit/World.js';
export default interface Chunk {
    contains(arg0: BlockData): boolean;
    load(arg0: boolean): boolean;
    load(): boolean;
    isLoaded(): boolean;
    unload(): boolean;
    unload(arg0: boolean): boolean;
    getEntities(): Array<Entity>;
    getZ(): number;
    getX(): number;
    getWorld(): World;
    getBlock(arg0: number, arg1: number, arg2: number): Block;
    getPluginChunkTickets(): any;
    removePluginChunkTicket(arg0: Plugin): boolean;
    addPluginChunkTicket(arg0: Plugin): boolean;
    setInhabitedTime(arg0: number): void;
    isSlimeChunk(): boolean;
    setForceLoaded(arg0: boolean): void;
    isForceLoaded(): boolean;
    getTileEntities(): Array<BlockState>;
    getInhabitedTime(): number;
    getChunkSnapshot(arg0: boolean, arg1: boolean, arg2: boolean): ChunkSnapshot;
    getChunkSnapshot(): ChunkSnapshot;
}
export default class Chunk {
    static get $javaClass(): any;
}
