declare var Java: any;
import {World} from '../../../org/bukkit/World.js'
import {Material} from '../../../org/bukkit/Material.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
import {PistonMoveReaction} from '../../../org/bukkit/block/PistonMoveReaction.js'
import {Chunk} from '../../../org/bukkit/Chunk.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {Biome} from '../../../org/bukkit/block/Biome.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {BlockState} from '../../../org/bukkit/block/BlockState.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Metadatable} from '../../../org/bukkit/metadata/Metadatable.js'

export interface Block extends Metadatable {
	getWorld(): World;
	getData(): number;
	setType(arg0: Material): void;
	setType(arg0: Material, arg1: boolean): void;
	getBoundingBox(): BoundingBox;
	getPistonMoveReaction(): PistonMoveReaction;
	getChunk(): Chunk;
	getX(): number;
	getY(): number;
	getZ(): number;
	rayTrace(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode): RayTraceResult;
	getBiome(): Biome;
	setBiome(arg0: Biome): void;
	getTemperature(): number;
	getHumidity(): number;
	getBlockData(): BlockData;
	getBlockPower(arg0: BlockFace): number;
	getBlockPower(): number;
	getDrops(arg0: ItemStack): any;
	getDrops(): any;
	getRelative(arg0: BlockFace, arg1: number): Block;
	getRelative(arg0: BlockFace): Block;
	getRelative(arg0: number, arg1: number, arg2: number): Block;
	getLightLevel(): number;
	getLightFromSky(): number;
	setBlockData(arg0: BlockData): void;
	setBlockData(arg0: BlockData, arg1: boolean): void;
	getFace(arg0: Block): BlockFace;
	isBlockPowered(): boolean;
	isLiquid(): boolean;
	isBlockIndirectlyPowered(): boolean;
	isBlockFacePowered(arg0: BlockFace): boolean;
	isBlockFaceIndirectlyPowered(arg0: BlockFace): boolean;
	isPassable(): boolean;
	breakNaturally(): boolean;
	breakNaturally(arg0: ItemStack): boolean;
	getLightFromBlocks(): number;
	isEmpty(): boolean;
	getLocation(arg0: Location): Location;
	getLocation(): Location;
	getState(): BlockState;
	getType(): Material;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	getMetadata(arg0: string): any;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
}

export class Block {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Block');
	}
}

