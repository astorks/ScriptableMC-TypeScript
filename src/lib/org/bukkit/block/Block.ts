declare var Java: any;
import Biome from './Biome.js'
import BlockData from './data/BlockData.js'
import BlockFace from './BlockFace.js'
import BlockState from './BlockState.js'
import BoundingBox from '../../../org/bukkit/util/BoundingBox.js'
import Chunk from '../../../org/bukkit/Chunk.js'
import Entity from '../../../org/bukkit/entity/Entity.js'
import FluidCollisionMode from '../../../org/bukkit/FluidCollisionMode.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Location from '../../../org/bukkit/Location.js'
import Material from '../../../org/bukkit/Material.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import Metadatable from '../../../org/bukkit/metadata/Metadatable.js'
import PistonMoveReaction from './PistonMoveReaction.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import RayTraceResult from '../../../org/bukkit/util/RayTraceResult.js'
import Vector from '../../../org/bukkit/util/Vector.js'
import World from '../../../org/bukkit/World.js'

export default interface Block extends Metadatable {
	applyBoneMeal(arg0: BlockFace): boolean;
	breakNaturally(): boolean;
	breakNaturally(arg0: ItemStack): boolean;
	getBiome(): Biome;
	getBlockData(): BlockData;
	getBlockPower(): number;
	getBlockPower(arg0: BlockFace): number;
	getBoundingBox(): BoundingBox;
	getChunk(): Chunk;
	getData(): number;
	getDrops(): Array<ItemStack>;
	getDrops(arg0: ItemStack): Array<ItemStack>;
	getDrops(arg0: ItemStack, arg1: Entity): Array<ItemStack>;
	getFace(arg0: Block): BlockFace;
	getHumidity(): number;
	getLightFromBlocks(): number;
	getLightFromSky(): number;
	getLightLevel(): number;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getMetadata(arg0: string): Array<MetadataValue>;
	getPistonMoveReaction(): PistonMoveReaction;
	getRelative(arg0: BlockFace): Block;
	getRelative(arg0: BlockFace, arg1: number): Block;
	getRelative(arg0: number, arg1: number, arg2: number): Block;
	getState(): BlockState;
	getTemperature(): number;
	getType(): Material;
	getWorld(): World;
	getX(): number;
	getY(): number;
	getZ(): number;
	hasMetadata(arg0: string): boolean;
	isBlockFaceIndirectlyPowered(arg0: BlockFace): boolean;
	isBlockFacePowered(arg0: BlockFace): boolean;
	isBlockIndirectlyPowered(): boolean;
	isBlockPowered(): boolean;
	isEmpty(): boolean;
	isLiquid(): boolean;
	isPassable(): boolean;
	isPreferredTool(arg0: ItemStack): boolean;
	rayTrace(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode): RayTraceResult;
	removeMetadata(arg0: string, arg1: Plugin): void;
	setBiome(arg0: Biome): void;
	setBlockData(arg0: BlockData): void;
	setBlockData(arg0: BlockData, arg1: boolean): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setType(arg0: Material): void;
	setType(arg0: Material, arg1: boolean): void;
}

export default class Block {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Block');
	}

}

