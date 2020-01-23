declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {Material} from '../../../org/bukkit/Material.js'
import {World} from '../../../org/bukkit/World.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {Chunk} from '../../../org/bukkit/Chunk.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Metadatable} from '../../../org/bukkit/metadata/Metadatable.js'

export interface BlockState extends Metadatable {
	update(force: boolean): boolean;
	update(force: boolean, applyPhysics: boolean): boolean;
	update(): boolean;
	getLocation(): Location;
	getLocation(loc: Location): Location;
	getType(): Material;
	getWorld(): World;
	getBlock(): Block;
	setData(data: MaterialData): void;
	setType(type: Material): void;
	getData(): MaterialData;
	getBlockData(): BlockData;
	getChunk(): Chunk;
	getZ(): number;
	getX(): number;
	getY(): number;
	setRawData(data: number): void;
	getRawData(): number;
	isPlaced(): boolean;
	getLightLevel(): number;
	setBlockData(data: BlockData): void;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
	hasMetadata(metadataKey: string): boolean;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
}

export class BlockState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.BlockState');
	}
}

