import { BlockData } from '../../org/bukkit/block/data/BlockData.js';
import { Biome } from '../../org/bukkit/block/Biome.js';
import { Material } from '../../org/bukkit/Material.js';
export interface ChunkSnapshot {
    getData(arg0: number, arg1: number, arg2: number): number;
    getX(): number;
    getZ(): number;
    getHighestBlockYAt(arg0: number, arg1: number): number;
    getBlockData(arg0: number, arg1: number, arg2: number): BlockData;
    getBiome(arg0: number, arg1: number, arg2: number): Biome;
    getBiome(arg0: number, arg1: number): Biome;
    getBlockEmittedLight(arg0: number, arg1: number, arg2: number): number;
    getWorldName(): string;
    getBlockType(arg0: number, arg1: number, arg2: number): Material;
    getBlockSkyLight(arg0: number, arg1: number, arg2: number): number;
    getRawBiomeTemperature(arg0: number, arg1: number, arg2: number): number;
    getRawBiomeTemperature(arg0: number, arg1: number): number;
    getCaptureFullTime(): number;
    isSectionEmpty(arg0: number): boolean;
    contains(arg0: BlockData): boolean;
}
export declare class ChunkSnapshot {
    static get $javaClass(): any;
}
