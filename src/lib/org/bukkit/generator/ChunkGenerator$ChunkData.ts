declare var Java: any;
import {Material} from '../../../org/bukkit/Material.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'

export interface ChunkGenerator$ChunkData {
	getType(x: number, y: number, z: number): Material;
	setRegion(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, material: Material): void;
	setRegion(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, blockData: BlockData): void;
	setRegion(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, material: MaterialData): void;
	getData(x: number, y: number, z: number): number;
	setBlock(x: number, y: number, z: number, material: Material): void;
	setBlock(x: number, y: number, z: number, material: MaterialData): void;
	setBlock(x: number, y: number, z: number, blockData: BlockData): void;
	getBlockData(x: number, y: number, z: number): BlockData;
	getTypeAndData(x: number, y: number, z: number): MaterialData;
	getMaxHeight(): number;
}

export class ChunkGenerator$ChunkData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.generator.ChunkGenerator$ChunkData');
	}
}

