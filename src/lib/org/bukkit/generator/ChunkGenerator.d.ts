import { World } from '../../../org/bukkit/World.js';
import { Location } from '../../../org/bukkit/Location.js';
import { ChunkGenerator$ChunkData } from '../../../org/bukkit/generator/ChunkGenerator$ChunkData.js';
import { ChunkGenerator$BiomeGrid } from '../../../org/bukkit/generator/ChunkGenerator$BiomeGrid.js';
export interface ChunkGenerator {
    getDefaultPopulators(world: World): any;
    getFixedSpawnLocation(world: World, random: any): Location;
    canSpawn(world: World, x: number, z: number): boolean;
    isParallelCapable(): boolean;
    generateChunkData(world: World, random: any, x: number, z: number, biome: ChunkGenerator$BiomeGrid): ChunkGenerator$ChunkData;
}
export declare class ChunkGenerator {
    static get $javaClass(): any;
    constructor();
}
