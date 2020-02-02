import Biome from '../../org/bukkit/block/Biome.js';
import BlockData from '../../org/bukkit/block/data/BlockData.js';
import Material from '../../org/bukkit/Material.js';
export default interface ChunkSnapshot {
    contains(arg0: BlockData): boolean;
    getBiome(arg0: number, arg1: number): Biome;
    getBiome(arg0: number, arg1: number, arg2: number): Biome;
    getZ(): number;
    getX(): number;
    getData(arg0: number, arg1: number, arg2: number): number;
    getHighestBlockYAt(arg0: number, arg1: number): number;
    getBlockType(arg0: number, arg1: number, arg2: number): Material;
    getBlockSkyLight(arg0: number, arg1: number, arg2: number): number;
    getWorldName(): string;
    getCaptureFullTime(): number;
    isSectionEmpty(arg0: number): boolean;
    getBlockEmittedLight(arg0: number, arg1: number, arg2: number): number;
    getRawBiomeTemperature(arg0: number, arg1: number): number;
    getRawBiomeTemperature(arg0: number, arg1: number, arg2: number): number;
    getBlockData(arg0: number, arg1: number, arg2: number): BlockData;
}
export default class ChunkSnapshot {
    static get $javaClass(): any;
}
