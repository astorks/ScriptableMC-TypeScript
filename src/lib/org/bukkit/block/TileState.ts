declare var Java: any;
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Material} from '../../../org/bukkit/Material.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {World} from '../../../org/bukkit/World.js'
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'
import {Chunk} from '../../../org/bukkit/Chunk.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {BlockState} from '../../../org/bukkit/block/BlockState.js'
import {PersistentDataHolder} from '../../../org/bukkit/persistence/PersistentDataHolder.js'

export interface TileState extends BlockState, PersistentDataHolder {
	getPersistentDataContainer(): PersistentDataContainer;
	update(force: boolean): boolean;
	update(force: boolean, applyPhysics: boolean): boolean;
	update(): boolean;
	getLocation(): Location;
	getLocation(loc: Location): Location;
	getType(): Material;
	getBlock(): Block;
	getWorld(): World;
	setType(type: Material): void;
	getData(): MaterialData;
	setData(data: MaterialData): void;
	getRawData(): number;
	setRawData(data: number): void;
	isPlaced(): boolean;
	getY(): number;
	getZ(): number;
	getChunk(): Chunk;
	getX(): number;
	getBlockData(): BlockData;
	setBlockData(data: BlockData): void;
	getLightLevel(): number;
	hasMetadata(metadataKey: string): boolean;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
}

export class TileState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.TileState');
	}
}

