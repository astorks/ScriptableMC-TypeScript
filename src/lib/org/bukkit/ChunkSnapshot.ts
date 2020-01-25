declare var Java: any;
import {Biome} from '../../org/bukkit/block/Biome.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {Material} from '../../org/bukkit/Material.js'

export interface ChunkSnapshot {
	getData(arg0: number, arg1: number, arg2: number): number;
	getHighestBlockYAt(arg0: number, arg1: number): number;
	getX(): number;
	getZ(): number;
	getBiome(arg0: number, arg1: number, arg2: number): Biome;
	getBiome(arg0: number, arg1: number): Biome;
	getBlockData(arg0: number, arg1: number, arg2: number): BlockData;
	getBlockEmittedLight(arg0: number, arg1: number, arg2: number): number;
	getBlockSkyLight(arg0: number, arg1: number, arg2: number): number;
	getRawBiomeTemperature(arg0: number, arg1: number): number;
	getRawBiomeTemperature(arg0: number, arg1: number, arg2: number): number;
	getCaptureFullTime(): number;
	isSectionEmpty(arg0: number): boolean;
	getBlockType(arg0: number, arg1: number, arg2: number): Material;
	getWorldName(): string;
	contains(arg0: BlockData): boolean;
}

export class ChunkSnapshot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.ChunkSnapshot');
	}
}

