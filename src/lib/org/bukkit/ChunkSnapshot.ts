declare var Java: any;
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {Biome} from '../../org/bukkit/block/Biome.js'
import {Material} from '../../org/bukkit/Material.js'

export interface ChunkSnapshot {
	contains(block: BlockData): boolean;
	getBlockEmittedLight(x: number, y: number, z: number): number;
	getRawBiomeTemperature(x: number, y: number, z: number): number;
	getRawBiomeTemperature(x: number, z: number): number;
	getHighestBlockYAt(x: number, z: number): number;
	getData(x: number, y: number, z: number): number;
	getZ(): number;
	getBiome(x: number, z: number): Biome;
	getBiome(x: number, y: number, z: number): Biome;
	getX(): number;
	getBlockData(x: number, y: number, z: number): BlockData;
	isSectionEmpty(sy: number): boolean;
	getBlockType(x: number, y: number, z: number): Material;
	getCaptureFullTime(): number;
	getWorldName(): string;
	getBlockSkyLight(x: number, y: number, z: number): number;
}

export class ChunkSnapshot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.ChunkSnapshot');
	}
}

