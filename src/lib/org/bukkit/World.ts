declare var Java: any;
import AbstractArrow from '../../org/bukkit/entity/AbstractArrow.js'
import Arrow from '../../org/bukkit/entity/Arrow.js'
import Biome from '../../org/bukkit/block/Biome.js'
import Block from '../../org/bukkit/block/Block.js'
import BlockChangeDelegate from '../../org/bukkit/BlockChangeDelegate.js'
import BlockData from '../../org/bukkit/block/data/BlockData.js'
import BlockPopulator from '../../org/bukkit/generator/BlockPopulator.js'
import BoundingBox from '../../org/bukkit/util/BoundingBox.js'
import Chunk from '../../org/bukkit/Chunk.js'
import ChunkGenerator from '../../org/bukkit/generator/ChunkGenerator.js'
import ChunkSnapshot from '../../org/bukkit/ChunkSnapshot.js'
import Consumer from '../../org/bukkit/util/Consumer.js'
import Difficulty from '../../org/bukkit/Difficulty.js'
import Effect from '../../org/bukkit/Effect.js'
import Entity from '../../org/bukkit/entity/Entity.js'
import EntityType from '../../org/bukkit/entity/EntityType.js'
import FallingBlock from '../../org/bukkit/entity/FallingBlock.js'
import File from '../../java/io/File.js'
import FluidCollisionMode from '../../org/bukkit/FluidCollisionMode.js'
import GameRule from '../../org/bukkit/GameRule.js'
import HeightMap from '../../org/bukkit/HeightMap.js'
import Item from '../../org/bukkit/entity/Item.js'
import ItemStack from '../../org/bukkit/inventory/ItemStack.js'
import LightningStrike from '../../org/bukkit/entity/LightningStrike.js'
import LivingEntity from '../../org/bukkit/entity/LivingEntity.js'
import Location from '../../org/bukkit/Location.js'
import Material from '../../org/bukkit/Material.js'
import MaterialData from '../../org/bukkit/material/MaterialData.js'
import MetadataValue from '../../org/bukkit/metadata/MetadataValue.js'
import Metadatable from '../../org/bukkit/metadata/Metadatable.js'
import Particle from '../../org/bukkit/Particle.js'
import Player from '../../org/bukkit/entity/Player.js'
import Plugin from '../../org/bukkit/plugin/Plugin.js'
import PluginMessageRecipient from '../../org/bukkit/plugin/messaging/PluginMessageRecipient.js'
import Raid from '../../org/bukkit/Raid.js'
import RayTraceResult from '../../org/bukkit/util/RayTraceResult.js'
import Sound from '../../org/bukkit/Sound.js'
import SoundCategory from '../../org/bukkit/SoundCategory.js'
import StructureType from '../../org/bukkit/StructureType.js'
import TreeType from '../../org/bukkit/TreeType.js'
import Vector from '../../org/bukkit/util/Vector.js'
import World$Environment from '../../org/bukkit/World$Environment.js'
import WorldBorder from '../../org/bukkit/WorldBorder.js'
import WorldType from '../../org/bukkit/WorldType.js'

export default interface World extends PluginMessageRecipient, Metadatable {
	addPluginChunkTicket(arg0: number, arg1: number, arg2: Plugin): boolean;
	canGenerateStructures(): boolean;
	createExplosion(arg0: Location, arg1: number): boolean;
	createExplosion(arg0: Location, arg1: number, arg2: boolean): boolean;
	createExplosion(arg0: Location, arg1: number, arg2: boolean, arg3: boolean): boolean;
	createExplosion(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
	createExplosion(arg0: Location, arg1: number, arg2: boolean, arg3: boolean, arg4: Entity): boolean;
	createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): boolean;
	createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean): boolean;
	createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean, arg6: Entity): boolean;
	dropItem(arg0: Location, arg1: ItemStack): Item;
	dropItemNaturally(arg0: Location, arg1: ItemStack): Item;
	generateTree(arg0: Location, arg1: TreeType): boolean;
	generateTree(arg0: Location, arg1: TreeType, arg2: BlockChangeDelegate): boolean;
	getAllowAnimals(): boolean;
	getAllowMonsters(): boolean;
	getAmbientSpawnLimit(): number;
	getAnimalSpawnLimit(): number;
	getBiome(arg0: number, arg1: number): Biome;
	getBiome(arg0: number, arg1: number, arg2: number): Biome;
	getBlockAt(arg0: Location): Block;
	getBlockAt(arg0: number, arg1: number, arg2: number): Block;
	getChunkAt(arg0: Block): Chunk;
	getChunkAt(arg0: Location): Chunk;
	getChunkAt(arg0: number, arg1: number): Chunk;
	getDifficulty(): Difficulty;
	getEmptyChunkSnapshot(arg0: number, arg1: number, arg2: boolean, arg3: boolean): ChunkSnapshot;
	getEntities(): Array<Entity>;
	getEntitiesByClass(arg0: Array<any>): any;
	getEntitiesByClass(arg0: any): any;
	getEntitiesByClasses(arg0: Array<any>): any;
	getEnvironment(): World$Environment;
	getForceLoadedChunks(): any;
	getFullTime(): number;
	getGameRuleDefault(arg0: GameRule): any;
	getGameRuleValue(arg0: string): string;
	getGameRuleValue(arg0: GameRule): any;
	getGameRules(): Array<string>;
	getGenerator(): ChunkGenerator;
	getHighestBlockAt(arg0: Location): Block;
	getHighestBlockAt(arg0: number, arg1: number): Block;
	getHighestBlockAt(arg0: Location, arg1: HeightMap): Block;
	getHighestBlockAt(arg0: number, arg1: number, arg2: HeightMap): Block;
	getHighestBlockYAt(arg0: Location): number;
	getHighestBlockYAt(arg0: number, arg1: number): number;
	getHighestBlockYAt(arg0: Location, arg1: HeightMap): number;
	getHighestBlockYAt(arg0: number, arg1: number, arg2: HeightMap): number;
	getHumidity(arg0: number, arg1: number): number;
	getHumidity(arg0: number, arg1: number, arg2: number): number;
	getKeepSpawnInMemory(): boolean;
	getListeningPluginChannels(): any;
	getLivingEntities(): Array<LivingEntity>;
	getLoadedChunks(): Array<Chunk>;
	getMaxHeight(): number;
	getMetadata(arg0: string): Array<MetadataValue>;
	getMonsterSpawnLimit(): number;
	getName(): string;
	getNearbyEntities(arg0: BoundingBox): any;
	getNearbyEntities(arg0: BoundingBox, arg1: any): any;
	getNearbyEntities(arg0: Location, arg1: number, arg2: number, arg3: number): any;
	getNearbyEntities(arg0: Location, arg1: number, arg2: number, arg3: number, arg4: any): any;
	getPVP(): boolean;
	getPlayers(): Array<Player>;
	getPluginChunkTickets(): any;
	getPluginChunkTickets(arg0: number, arg1: number): any;
	getPopulators(): Array<BlockPopulator>;
	getRaids(): Array<Raid>;
	getSeaLevel(): number;
	getSeed(): number;
	getSpawnLocation(): Location;
	getTemperature(arg0: number, arg1: number): number;
	getTemperature(arg0: number, arg1: number, arg2: number): number;
	getThunderDuration(): number;
	getTicksPerAnimalSpawns(): number;
	getTicksPerMonsterSpawns(): number;
	getTime(): number;
	getUID(): string;
	getViewDistance(): number;
	getWaterAnimalSpawnLimit(): number;
	getWeatherDuration(): number;
	getWorldBorder(): WorldBorder;
	getWorldFolder(): File;
	getWorldType(): WorldType;
	hasMetadata(arg0: string): boolean;
	hasStorm(): boolean;
	isAutoSave(): boolean;
	isChunkForceLoaded(arg0: number, arg1: number): boolean;
	isChunkGenerated(arg0: number, arg1: number): boolean;
	isChunkInUse(arg0: number, arg1: number): boolean;
	isChunkLoaded(arg0: Chunk): boolean;
	isChunkLoaded(arg0: number, arg1: number): boolean;
	isGameRule(arg0: string): boolean;
	isHardcore(): boolean;
	isThundering(): boolean;
	loadChunk(arg0: Chunk): void;
	loadChunk(arg0: number, arg1: number): void;
	loadChunk(arg0: number, arg1: number, arg2: boolean): boolean;
	locateNearestRaid(arg0: Location, arg1: number): Raid;
	locateNearestStructure(arg0: Location, arg1: StructureType, arg2: number, arg3: boolean): Location;
	playEffect(arg0: Location, arg1: Effect, arg2: any): void;
	playEffect(arg0: Location, arg1: Effect, arg2: number): void;
	playEffect(arg0: Location, arg1: Effect, arg2: number, arg3: number): void;
	playEffect(arg0: Location, arg1: Effect, arg2: any, arg3: number): void;
	playSound(arg0: Location, arg1: string, arg2: number, arg3: number): void;
	playSound(arg0: Location, arg1: Sound, arg2: number, arg3: number): void;
	playSound(arg0: Location, arg1: string, arg2: SoundCategory, arg3: number, arg4: number): void;
	playSound(arg0: Location, arg1: Sound, arg2: SoundCategory, arg3: number, arg4: number): void;
	rayTrace(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode, arg4: boolean, arg5: number, arg6: any): RayTraceResult;
	rayTraceBlocks(arg0: Location, arg1: Vector, arg2: number): RayTraceResult;
	rayTraceBlocks(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode): RayTraceResult;
	rayTraceBlocks(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode, arg4: boolean): RayTraceResult;
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: number): RayTraceResult;
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: number, arg3: any): RayTraceResult;
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: number, arg3: number): RayTraceResult;
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: number, arg3: number, arg4: any): RayTraceResult;
	refreshChunk(arg0: number, arg1: number): boolean;
	regenerateChunk(arg0: number, arg1: number): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
	removePluginChunkTicket(arg0: number, arg1: number, arg2: Plugin): boolean;
	removePluginChunkTickets(arg0: Plugin): void;
	save(): void;
	sendPluginMessage(arg0: Plugin, arg1: string, arg2: Array<number>): void;
	setAmbientSpawnLimit(arg0: number): void;
	setAnimalSpawnLimit(arg0: number): void;
	setAutoSave(arg0: boolean): void;
	setBiome(arg0: number, arg1: number, arg2: Biome): void;
	setBiome(arg0: number, arg1: number, arg2: number, arg3: Biome): void;
	setChunkForceLoaded(arg0: number, arg1: number, arg2: boolean): void;
	setDifficulty(arg0: Difficulty): void;
	setFullTime(arg0: number): void;
	setGameRule(arg0: GameRule, arg1: any): boolean;
	setGameRuleValue(arg0: string, arg1: string): boolean;
	setHardcore(arg0: boolean): void;
	setKeepSpawnInMemory(arg0: boolean): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setMonsterSpawnLimit(arg0: number): void;
	setPVP(arg0: boolean): void;
	setSpawnFlags(arg0: boolean, arg1: boolean): void;
	setSpawnLocation(arg0: Location): boolean;
	setSpawnLocation(arg0: number, arg1: number, arg2: number): boolean;
	setStorm(arg0: boolean): void;
	setThunderDuration(arg0: number): void;
	setThundering(arg0: boolean): void;
	setTicksPerAnimalSpawns(arg0: number): void;
	setTicksPerMonsterSpawns(arg0: number): void;
	setTime(arg0: number): void;
	setWaterAnimalSpawnLimit(arg0: number): void;
	setWeatherDuration(arg0: number): void;
	spawn(arg0: Location, arg1: any): Entity;
	spawn(arg0: Location, arg1: any, arg2: Consumer): Entity;
	spawnArrow(arg0: Location, arg1: Vector, arg2: number, arg3: number): Arrow;
	spawnArrow(arg0: Location, arg1: Vector, arg2: number, arg3: number, arg4: any): AbstractArrow;
	spawnEntity(arg0: Location, arg1: EntityType): Entity;
	spawnFallingBlock(arg0: Location, arg1: MaterialData): FallingBlock;
	spawnFallingBlock(arg0: Location, arg1: BlockData): FallingBlock;
	spawnFallingBlock(arg0: Location, arg1: Material, arg2: number): FallingBlock;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: any): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: any): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: any): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: any): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: any): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: any, arg8: boolean): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: any): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: any, arg10: boolean): void;
	strikeLightning(arg0: Location): LightningStrike;
	strikeLightningEffect(arg0: Location): LightningStrike;
	unloadChunk(arg0: Chunk): boolean;
	unloadChunk(arg0: number, arg1: number): boolean;
	unloadChunk(arg0: number, arg1: number, arg2: boolean): boolean;
	unloadChunkRequest(arg0: number, arg1: number): boolean;
}

export default class World {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.World');
	}

}

