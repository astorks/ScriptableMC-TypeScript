declare var Java: any;
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {Biome} from '../../org/bukkit/block/Biome.js'
import {Material} from '../../org/bukkit/Material.js'

export interface ChunkSnapshot {
	contains(block: BlockData): boolean;
	getData(x: number, y: number, z: number): number;
	getBlockData(x: number, y: number, z: number): BlockData;
	getZ(): number;
	getX(): number;
	getBiome(x: number, y: number, z: number): Biome;
	getBiome(x: number, z: number): Biome;
	getHighestBlockYAt(x: number, z: number): number;
	getBlockEmittedLight(x: number, y: number, z: number): number;
	getRawBiomeTemperature(x: number, y: number, z: number): number;
	getRawBiomeTemperature(x: number, z: number): number;
	getBlockSkyLight(x: number, y: number, z: number): number;
	getWorldName(): string;
	isSectionEmpty(sy: number): boolean;
	getBlockType(x: number, y: number, z: number): Material;
	getCaptureFullTime(): number;
}

export class ChunkSnapshot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.ChunkSnapshot');
	}
}

