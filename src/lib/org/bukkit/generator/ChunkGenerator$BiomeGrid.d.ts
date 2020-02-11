import Biome from '../../../org/bukkit/block/Biome.js';
export default interface ChunkGenerator$BiomeGrid {
    setBiome(arg0: number, arg1: number, arg2: number, arg3: Biome): void;
    setBiome(arg0: number, arg1: number, arg2: Biome): void;
    getBiome(arg0: number, arg1: number, arg2: number): Biome;
    getBiome(arg0: number, arg1: number): Biome;
}
export default class ChunkGenerator$BiomeGrid {
    static get $javaClass(): any;
}
