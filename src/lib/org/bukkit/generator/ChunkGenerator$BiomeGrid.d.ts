import { Biome } from '../../../org/bukkit/block/Biome.js';
export interface ChunkGenerator$BiomeGrid {
    getBiome(arg0: number, arg1: number): Biome;
    getBiome(arg0: number, arg1: number, arg2: number): Biome;
    setBiome(arg0: number, arg1: number, arg2: number, arg3: Biome): void;
    setBiome(arg0: number, arg1: number, arg2: Biome): void;
}
export declare class ChunkGenerator$BiomeGrid {
    static get $javaClass(): any;
}
