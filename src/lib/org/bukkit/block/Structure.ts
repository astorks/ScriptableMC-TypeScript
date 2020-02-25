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
	getAuthor(): string;
	getBlock(): Block;
	getBlockData(): BlockData;
	getChunk(): Chunk;
	getData(): MaterialData;
	getIntegrity(): number;
	getLightLevel(): number;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getMetadata(): string;
	getMetadata(arg0: string): Array<MetadataValue>;
	getMirror(): Mirror;
	getPersistentDataContainer(): PersistentDataContainer;
	getRawData(): number;
	getRelativePosition(): BlockVector;
	getRotation(): StructureRotation;
	getSeed(): number;
	getStructureName(): string;
	getStructureSize(): BlockVector;
	getType(): Material;
	getUsageMode(): UsageMode;
	getWorld(): World;
	getX(): number;
	getY(): number;
	getZ(): number;
	hasMetadata(arg0: string): boolean;
	isBoundingBoxVisible(): boolean;
	isIgnoreEntities(): boolean;
	isPlaced(): boolean;
	isShowAir(): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
	setAuthor(arg0: string): void;
	setAuthor(arg0: LivingEntity): void;
	setBlockData(arg0: BlockData): void;
	setBoundingBoxVisible(arg0: boolean): void;
	setData(arg0: MaterialData): void;
	setIgnoreEntities(arg0: boolean): void;
	setIntegrity(arg0: number): void;
	setMetadata(arg0: string): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setMirror(arg0: Mirror): void;
	setRawData(arg0: number): void;
	setRelativePosition(arg0: BlockVector): void;
	setRotation(arg0: StructureRotation): void;
	setSeed(arg0: number): void;
	setShowAir(arg0: boolean): void;
	setStructureName(arg0: string): void;
	setStructureSize(arg0: BlockVector): void;
	setType(arg0: Material): void;
	setUsageMode(arg0: UsageMode): void;
	update(): boolean;
	update(arg0: boolean): boolean;
	update(arg0: boolean, arg1: boolean): boolean;
}

export default class Structure {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Structure');
	}

}

