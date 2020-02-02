import Biome from '../../../org/bukkit/block/Biome.js';
import BlockData from '../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import BlockState from '../../../org/bukkit/block/BlockState.js';
import BoundingBox from '../../../org/bukkit/util/BoundingBox.js';
import Chunk from '../../../org/bukkit/Chunk.js';
import FluidCollisionMode from '../../../org/bukkit/FluidCollisionMode.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Location from '../../../org/bukkit/Location.js';
import Material from '../../../org/bukkit/Material.js';
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import Metadatable from '../../../org/bukkit/metadata/Metadatable.js';
import PistonMoveReaction from '../../../org/bukkit/block/PistonMoveReaction.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import RayTraceResult from '../../../org/bukkit/util/RayTraceResult.js';
import Vector from '../../../org/bukkit/util/Vector.js';
import World from '../../../org/bukkit/World.js';
export default interface Block extends Metadatable {
    isEmpty(): boolean;
    getLocation(): Location;
    getLocation(arg0: Location): Location;
    getState(): BlockState;
    getType(): Material;
    rayTrace(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode): RayTraceResult;
    getBiome(): Biome;
    getTemperature(): number;
    setBiome(arg0: Biome): void;
    getHumidity(): number;
    getChunk(): Chunk;
    getZ(): number;
    getY(): number;
    getX(): number;
    getWorld(): World;
    getBoundingBox(): BoundingBox;
    getPistonMoveReaction(): PistonMoveReaction;
    getData(): number;
    setType(arg0: Material, arg1: boolean): void;
    setType(arg0: Material): void;
    getBlockData(): BlockData;
    isBlockIndirectlyPowered(): boolean;
    isBlockFaceIndirectlyPowered(arg0: BlockFace): boolean;
    isLiquid(): boolean;
    breakNaturally(): boolean;
    breakNaturally(arg0: ItemStack): boolean;
    getRelative(arg0: BlockFace): Block;
    getRelative(arg0: number, arg1: number, arg2: number): Block;
    getRelative(arg0: BlockFace, arg1: number): Block;
    getLightLevel(): number;
    setBlockData(arg0: BlockData): void;
    setBlockData(arg0: BlockData, arg1: boolean): void;
    isBlockPowered(): boolean;
    isBlockFacePowered(arg0: BlockFace): boolean;
    getDrops(): any;
    getDrops(arg0: ItemStack): any;
    getFace(arg0: Block): BlockFace;
    isPassable(): boolean;
    getLightFromBlocks(): number;
    getLightFromSky(): number;
    getBlockPower(arg0: BlockFace): number;
    getBlockPower(): number;
    removeMetadata(arg0: string, arg1: Plugin): void;
    hasMetadata(arg0: string): boolean;
    setMetadata(arg0: string, arg1: MetadataValue): void;
    getMetadata(arg0: string): any;
}
export default class Block {
    static get $javaClass(): any;
}
