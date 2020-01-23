declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {BlockState} from '../../../org/bukkit/block/BlockState.js'
import {Material} from '../../../org/bukkit/Material.js'
import {World} from '../../../org/bukkit/World.js'
import {PistonMoveReaction} from '../../../org/bukkit/block/PistonMoveReaction.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {Chunk} from '../../../org/bukkit/Chunk.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {Biome} from '../../../org/bukkit/block/Biome.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Metadatable} from '../../../org/bukkit/metadata/Metadatable.js'

export interface Block extends Metadatable {
	isEmpty(): boolean;
	getLocation(): Location;
	getLocation(loc: Location): Location;
	getState(): BlockState;
	getType(): Material;
	getWorld(): World;
	setType(type: Material): void;
	setType(type: Material, applyPhysics: boolean): void;
	getData(): number;
	getPistonMoveReaction(): PistonMoveReaction;
	getBlockData(): BlockData;
	getChunk(): Chunk;
	getZ(): number;
	getX(): number;
	getY(): number;
	rayTrace(start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
	getBiome(): Biome;
	setBiome(bio: Biome): void;
	getTemperature(): number;
	getHumidity(): number;
	isBlockFaceIndirectlyPowered(face: BlockFace): boolean;
	isBlockIndirectlyPowered(): boolean;
	getLightLevel(): number;
	getLightFromSky(): number;
	getRelative(modX: number, modY: number, modZ: number): Block;
	getRelative(face: BlockFace, distance: number): Block;
	getRelative(face: BlockFace): Block;
	setBlockData(data: BlockData, applyPhysics: boolean): void;
	setBlockData(data: BlockData): void;
	getBlockPower(): number;
	getBlockPower(face: BlockFace): number;
	isLiquid(): boolean;
	breakNaturally(tool: ItemStack): boolean;
	breakNaturally(): boolean;
	isPassable(): boolean;
	getLightFromBlocks(): number;
	getFace(block: Block): BlockFace;
	getDrops(): any;
	getDrops(tool: ItemStack): any;
	isBlockPowered(): boolean;
	isBlockFacePowered(face: BlockFace): boolean;
	getBoundingBox(): BoundingBox;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
	hasMetadata(metadataKey: string): boolean;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
}

export class Block {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Block');
	}
}

