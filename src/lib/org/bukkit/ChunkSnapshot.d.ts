import { BlockData } from '../../org/bukkit/block/data/BlockData.js';
import { Biome } from '../../org/bukkit/block/Biome.js';
import { Material } from '../../org/bukkit/Material.js';
export interface ChunkSnapshot {
    contains(arg0: BlockData): boolean;
    getData(arg0: number, arg1: number, arg2: number): number;
    getHighestBlockYAt(arg0: number, arg1: number): number;
    getBiome(arg0: number, arg1: number): Biome;
    getBiome(arg0: number, arg1: number, arg2: number): Biome;
    getX(): number;
    getZ(): number;
    getBlockData(arg0: number, arg1: number, arg2: number): BlockData;
    getRawBiomeTemperature(arg0: number, arg1: number, arg2: number): number;
    getRawBiomeTemperature(arg0: number, arg1: number): number;
    getBlockEmittedLight(arg0: number, arg1: number, arg2: number): number;
    getCaptureFullTime(): number;
    getBlockType(arg0: number, arg1: number, arg2: number): Material;
    isSectionEmpty(arg0: number): boolean;
    getWorldName(): string;
    getBlockSkyLight(arg0: number, arg1: number, arg2: number): number;
}
export declare class ChunkSnapshot {
    static get $javaClass(): any;
}
