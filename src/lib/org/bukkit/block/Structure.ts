declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import BlockData from '../../../org/bukkit/block/data/BlockData.js'
import BlockVector from '../../../org/bukkit/util/BlockVector.js'
import Chunk from '../../../org/bukkit/Chunk.js'
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js'
import Location from '../../../org/bukkit/Location.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import Mirror from '../../../org/bukkit/block/structure/Mirror.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import StructureRotation from '../../../org/bukkit/block/structure/StructureRotation.js'
import TileState from '../../../org/bukkit/block/TileState.js'
import UsageMode from '../../../org/bukkit/block/structure/UsageMode.js'
import World from '../../../org/bukkit/World.js'

export default interface Structure extends TileState {
	setSeed(arg0: number): void;
	getSeed(): number;
	setRotation(arg0: StructureRotation): void;
	setMetadata(arg0: string): void;
	getMetadata(): string;
	setAuthor(arg0: LivingEntity): void;
	setAuthor(arg0: string): void;
	getAuthor(): string;
	getRotation(): StructureRotation;
	setStructureName(arg0: string): void;
	getStructureName(): string;
	getStructureSize(): BlockVector;
	setStructureSize(arg0: BlockVector): void;
	getRelativePosition(): BlockVector;
	setRelativePosition(arg0: BlockVector): void;
	setMirror(arg0: Mirror): void;
	getMirror(): Mirror;
	setUsageMode(arg0: UsageMode): void;
	getUsageMode(): UsageMode;
	setIgnoreEntities(arg0: boolean): void;
	isIgnoreEntities(): boolean;
	setShowAir(arg0: boolean): void;
	isShowAir(): boolean;
	setBoundingBoxVisible(arg0: boolean): void;
	isBoundingBoxVisible(): boolean;
	setIntegrity(arg0: number): void;
	getIntegrity(): number;
	getPersistentDataContainer(): PersistentDataContainer;
	getData(): MaterialData;
	getBlock(): Block;
	getWorld(): World;
	setType(arg0: Material): void;
	setData(arg0: MaterialData): void;
	getChunk(): Chunk;
	getX(): number;
	getY(): number;
	getZ(): number;
	getBlockData(): BlockData;
	setRawData(arg0: number): void;
	getRawData(): number;
	isPlaced(): boolean;
	setBlockData(arg0: BlockData): void;
	getLightLevel(): number;
	update(arg0: boolean, arg1: boolean): boolean;
	update(arg0: boolean): boolean;
	update(): boolean;
	getLocation(arg0: Location): Location;
	getLocation(): Location;
	getType(): Material;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	getMetadata(arg0: string): Array<MetadataValue>;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
}

export default class Structure {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Structure');
	}
}

