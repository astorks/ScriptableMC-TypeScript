import BlockPopulator from '../../../org/bukkit/generator/BlockPopulator.js';
import ChunkGenerator$BiomeGrid from '../../../org/bukkit/generator/ChunkGenerator$BiomeGrid.js';
import ChunkGenerator$ChunkData from '../../../org/bukkit/generator/ChunkGenerator$ChunkData.js';
import Location from '../../../org/bukkit/Location.js';
import World from '../../../org/bukkit/World.js';
export default interface ChunkGenerator {
    generateChunkData(world: World, random: any, x: number, z: number, biome: ChunkGenerator$BiomeGrid): ChunkGenerator$ChunkData;
    getDefaultPopulators(world: World): Array<BlockPopulator>;
    getFixedSpawnLocation(world: World, random: any): Location;
    isParallelCapable(): boolean;
    shouldGenerateCaves(): boolean;
    shouldGenerateDecorations(): boolean;
    shouldGenerateMobs(): boolean;
    shouldGenerateStructures(): boolean;
    canSpawn(world: World, x: number, z: number): boolean;
}
export default class ChunkGenerator {
    static get $javaClass(): any;
    constructor();
}
