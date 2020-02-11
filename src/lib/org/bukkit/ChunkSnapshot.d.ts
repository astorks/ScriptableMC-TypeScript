import Biome from '../../org/bukkit/block/Biome.js';
import BlockData from '../../org/bukkit/block/data/BlockData.js';
import Material from '../../org/bukkit/Material.js';
export default interface ChunkSnapshot {
    contains(arg0: BlockData): boolean;
    getHighestBlockYAt(arg0: number, arg1: number): number;
    getBlockType(arg0: number, arg1: number, arg2: number): Material;
    getWorldName(): string;
    getCaptureFullTime(): number;
    getBlockSkyLight(arg0: number, arg1: number, arg2: number): number;
    isSectionEmpty(arg0: number): boolean;
    getBiome(arg0: number, arg1: number): Biome;
    getBiome(arg0: number, arg1: number, arg2: number): Biome;
    getX(): number;
    getZ(): number;
    getData(arg0: number, arg1: number, arg2: number): number;
    getBlockData(arg0: number, arg1: number, arg2: number): BlockData;
    getBlockEmittedLight(arg0: number, arg1: number, arg2: number): number;
    getRawBiomeTemperature(arg0: number, arg1: number, arg2: number): number;
    getRawBiomeTemperature(arg0: number, arg1: number): number;
}
export default class ChunkSnapshot {
    static get $javaClass(): any;
}
