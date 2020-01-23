declare var Java: any;
import {BrewerInventory} from '../../../org/bukkit/inventory/BrewerInventory.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Material} from '../../../org/bukkit/Material.js'
import {World} from '../../../org/bukkit/World.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {MaterialData} from '../../../org/bukkit/material/MaterialData.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {Chunk} from '../../../org/bukkit/Chunk.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Container} from '../../../org/bukkit/block/Container.js'

export interface BrewingStand extends Container {
	getInventory(): BrewerInventory;
	getInventory(): Inventory;
	getSnapshotInventory(): Inventory;
	getSnapshotInventory(): BrewerInventory;
	getFuelLevel(): number;
	setBrewingTime(brewTime: number): void;
	setFuelLevel(level: number): void;
	getBrewingTime(): number;
	getPersistentDataContainer(): PersistentDataContainer;
	update(force: boolean): boolean;
	update(force: boolean, applyPhysics: boolean): boolean;
	update(): boolean;
	getLocation(): Location;
	getLocation(loc: Location): Location;
	getType(): Material;
	getWorld(): World;
	getBlock(): Block;
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
	isLocked(): boolean;
	getLock(): string;
	setLock(key: string): void;
	getCustomName(): string;
	setCustomName(_name: string): void;
}

export class BrewingStand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.BrewingStand');
	}
}

