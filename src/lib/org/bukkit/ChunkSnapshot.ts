declare var Java: any;
import Biome from '../../org/bukkit/block/Biome.js'
import BlockData from '../../org/bukkit/block/data/BlockData.js'
import Material from '../../org/bukkit/Material.js'

export default interface ChunkSnapshot {
	contains(arg0: BlockData): boolean;
	getBiome(arg0: number, arg1: number): Biome;
	getBiome(arg0: number, arg1: number, arg2: number): Biome;
	getBlockData(arg0: number, arg1: number, arg2: number): BlockData;
	getBlockEmittedLight(arg0: number, arg1: number, arg2: number): number;
	getBlockSkyLight(arg0: number, arg1: number, arg2: number): number;
	getBlockType(arg0: number, arg1: number, arg2: number): Material;
	getCaptureFullTime(): number;
	getData(arg0: number, arg1: number, arg2: number): number;
	getHighestBlockYAt(arg0: number, arg1: number): number;
	getRawBiomeTemperature(arg0: number, arg1: number): number;
	getRawBiomeTemperature(arg0: number, arg1: number, arg2: number): number;
	getWorldName(): string;
	getX(): number;
	getZ(): number;
	isSectionEmpty(arg0: number): boolean;
}

export default class ChunkSnapshot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.ChunkSnapshot');
	}

}

