declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {BlockState} from '../../../org/bukkit/block/BlockState.js'
import {Material} from '../../../org/bukkit/Material.js'
import {World} from '../../../org/bukkit/World.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
import {PistonMoveReaction} from '../../../org/bukkit/block/PistonMoveReaction.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {Biome} from '../../../org/bukkit/block/Biome.js'
import {Chunk} from '../../../org/bukkit/Chunk.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Metadatable} from '../../../org/bukkit/metadata/Metadatable.js'

export interface Block extends Metadatable {
	isEmpty(): boolean;
	getLocation(): Location;
	getLocation(loc: Location): Location;
	getState(): BlockState;
	getType(): Material;
	getWorld(): World;
	getBoundingBox(): BoundingBox;
	getPistonMoveReaction(): PistonMoveReaction;
	isBlockFaceIndirectlyPowered(face: BlockFace): boolean;
	isBlockIndirectlyPowered(): boolean;
	setType(type: Material): void;
	setType(type: Material, applyPhysics: boolean): void;
	getData(): number;
	rayTrace(start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
	getY(): number;
	getTemperature(): number;
	getHumidity(): number;
	getZ(): number;
	setBiome(bio: Biome): void;
	getBiome(): Biome;
	getChunk(): Chunk;
	getX(): number;
	getBlockData(): BlockData;
	getLightFromBlocks(): number;
	isBlockPowered(): boolean;
	getBlockPower(face: BlockFace): number;
	getBlockPower(): number;
	setBlockData(data: BlockData): void;
	setBlockData(data: BlockData, applyPhysics: boolean): void;
	isPassable(): boolean;
	isBlockFacePowered(face: BlockFace): boolean;
	isLiquid(): boolean;
	breakNaturally(tool: ItemStack): boolean;
	breakNaturally(): boolean;
	getLightLevel(): number;
	getRelative(modX: number, modY: number, modZ: number): Block;
	getRelative(face: BlockFace): Block;
	getRelative(face: BlockFace, distance: number): Block;
	getLightFromSky(): number;
	getFace(block: Block): BlockFace;
	getDrops(): any;
	getDrops(tool: ItemStack): any;
	hasMetadata(metadataKey: string): boolean;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
}

export class Block {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Block');
	}
}

