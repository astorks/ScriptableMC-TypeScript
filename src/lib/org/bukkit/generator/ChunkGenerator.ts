declare var Java: any;
import {World} from '../../../org/bukkit/World.js'
import {Location} from '../../../org/bukkit/Location.js'
import {ChunkGenerator$ChunkData} from '../../../org/bukkit/generator/ChunkGenerator$ChunkData.js'
import {ChunkGenerator$BiomeGrid} from '../../../org/bukkit/generator/ChunkGenerator$BiomeGrid.js'

export interface ChunkGenerator {
	canSpawn(world: World, x: number, z: number): boolean;
	getDefaultPopulators(world: World): any;
	getFixedSpawnLocation(world: World, random: any): Location;
	isParallelCapable(): boolean;
	generateChunkData(world: World, random: any, x: number, z: number, biome: ChunkGenerator$BiomeGrid): ChunkGenerator$ChunkData;
}

export class ChunkGenerator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.generator.ChunkGenerator');
	}
	constructor();
	constructor(...args: any[]) {
		return new ChunkGenerator.$javaClass(...args);
	}
}

