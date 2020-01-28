import { ChunkGenerator$ChunkData } from '../../../org/bukkit/generator/ChunkGenerator$ChunkData.js';
import { World } from '../../../org/bukkit/World.js';
import { ChunkGenerator$BiomeGrid } from '../../../org/bukkit/generator/ChunkGenerator$BiomeGrid.js';
import { Location } from '../../../org/bukkit/Location.js';
export interface ChunkGenerator {
    generateChunkData(world: World, random: any, x: number, z: number, biome: ChunkGenerator$BiomeGrid): ChunkGenerator$ChunkData;
    getDefaultPopulators(world: World): any;
    getFixedSpawnLocation(world: World, random: any): Location;
    isParallelCapable(): boolean;
    canSpawn(world: World, x: number, z: number): boolean;
}
export declare class ChunkGenerator {
    static get $javaClass(): any;
    constructor();
}
