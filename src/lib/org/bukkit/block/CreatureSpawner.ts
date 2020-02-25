declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import BlockData from '../../../org/bukkit/block/data/BlockData.js'
import Chunk from '../../../org/bukkit/Chunk.js'
import EntityType from '../../../org/bukkit/entity/EntityType.js'
import Location from '../../../org/bukkit/Location.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import TileState from '../../../org/bukkit/block/TileState.js'
import World from '../../../org/bukkit/World.js'

export default interface CreatureSpawner extends TileState {
	getBlock(): Block;
	getBlockData(): BlockData;
	getChunk(): Chunk;
	getCreatureTypeName(): string;
	getData(): MaterialData;
	getDelay(): number;
	getLightLevel(): number;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getMaxNearbyEntities(): number;
	getMaxSpawnDelay(): number;
	getMetadata(arg0: string): Array<MetadataValue>;
	getMinSpawnDelay(): number;
	getPersistentDataContainer(): PersistentDataContainer;
	getRawData(): number;
	getRequiredPlayerRange(): number;
	getSpawnCount(): number;
	getSpawnRange(): number;
	getSpawnedType(): EntityType;
	getType(): Material;
	getWorld(): World;
	getX(): number;
	getY(): number;
	getZ(): number;
	hasMetadata(arg0: string): boolean;
	isPlaced(): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
	setBlockData(arg0: BlockData): void;
	setCreatureTypeByName(arg0: string): void;
	setData(arg0: MaterialData): void;
	setDelay(arg0: number): void;
	setMaxNearbyEntities(arg0: number): void;
	setMaxSpawnDelay(arg0: number): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setMinSpawnDelay(arg0: number): void;
	setRawData(arg0: number): void;
	setRequiredPlayerRange(arg0: number): void;
	setSpawnCount(arg0: number): void;
	setSpawnRange(arg0: number): void;
	setSpawnedType(arg0: EntityType): void;
	setType(arg0: Material): void;
	update(): boolean;
	update(arg0: boolean): boolean;
	update(arg0: boolean, arg1: boolean): boolean;
}

export default class CreatureSpawner {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.CreatureSpawner');
	}

}

