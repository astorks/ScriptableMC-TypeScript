import ChunkGenerator$BiomeGrid from '../../../org/bukkit/generator/ChunkGenerator$BiomeGrid.js';
import ChunkGenerator$ChunkData from '../../../org/bukkit/generator/ChunkGenerator$ChunkData.js';
import Location from '../../../org/bukkit/Location.js';
import World from '../../../org/bukkit/World.js';
export default interface ChunkGenerator {
    generateChunkData(world: World, random: any, x: number, z: number, biome: ChunkGenerator$BiomeGrid): ChunkGenerator$ChunkData;
    isParallelCapable(): boolean;
    canSpawn(world: World, x: number, z: number): boolean;
    getDefaultPopulators(world: World): any;
    getFixedSpawnLocation(world: World, random: any): Location;
}
export default class ChunkGenerator {
    static get $javaClass(): any;
    constructor();
}
