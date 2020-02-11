import Biome from '../../org/bukkit/block/Biome.js';
import BlockData from '../../org/bukkit/block/data/BlockData.js';
import Material from '../../org/bukkit/Material.js';
export default interface ChunkSnapshot {
    contains(arg0: BlockData): boolean;
    getData(arg0: number, arg1: number, arg2: number): number;
    getCaptureFullTime(): number;
    getBlockType(arg0: number, arg1: number, arg2: number): Material;
    getWorldName(): string;
    getBlockSkyLight(arg0: number, arg1: number, arg2: number): number;
    isSectionEmpty(arg0: number): boolean;
    getRawBiomeTemperature(arg0: number, arg1: number): number;
    getRawBiomeTemperature(arg0: number, arg1: number, arg2: number): number;
    getBlockEmittedLight(arg0: number, arg1: number, arg2: number): number;
    getHighestBlockYAt(arg0: number, arg1: number): number;
    getBiome(arg0: number, arg1: number, arg2: number): Biome;
    getBiome(arg0: number, arg1: number): Biome;
    getBlockData(arg0: number, arg1: number, arg2: number): BlockData;
    getZ(): number;
    getX(): number;
}
export default class ChunkSnapshot {
    static get $javaClass(): any;
}
