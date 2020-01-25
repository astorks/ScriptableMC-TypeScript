declare var Java: any;
import {WorldType} from '../../org/bukkit/WorldType.js'
import {GameRule} from '../../org/bukkit/GameRule.js'
import {Location} from '../../org/bukkit/Location.js'
import {Sound} from '../../org/bukkit/Sound.js'
import {SoundCategory} from '../../org/bukkit/SoundCategory.js'
import {Effect} from '../../org/bukkit/Effect.js'
import {Particle} from '../../org/bukkit/Particle.js'
import {RayTraceResult} from '../../org/bukkit/util/RayTraceResult.js'
import {Vector} from '../../org/bukkit/util/Vector.js'
import {FluidCollisionMode} from '../../org/bukkit/FluidCollisionMode.js'
import {BoundingBox} from '../../org/bukkit/util/BoundingBox.js'
import {World$Environment} from '../../org/bukkit/World$Environment.js'
import {ChunkGenerator} from '../../org/bukkit/generator/ChunkGenerator.js'
import {Chunk} from '../../org/bukkit/Chunk.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'
import {Item} from '../../org/bukkit/entity/Item.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'
import {AbstractArrow} from '../../org/bukkit/entity/AbstractArrow.js'
import {Arrow} from '../../org/bukkit/entity/Arrow.js'
import {TreeType} from '../../org/bukkit/TreeType.js'
import {BlockChangeDelegate} from '../../org/bukkit/BlockChangeDelegate.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../org/bukkit/entity/EntityType.js'
import {LightningStrike} from '../../org/bukkit/entity/LightningStrike.js'
import {Consumer} from '../../org/bukkit/util/Consumer.js'
import {FallingBlock} from '../../org/bukkit/entity/FallingBlock.js'
import {Material} from '../../org/bukkit/Material.js'
import {MaterialData} from '../../org/bukkit/material/MaterialData.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {ChunkSnapshot} from '../../org/bukkit/ChunkSnapshot.js'
import {Biome} from '../../org/bukkit/block/Biome.js'
import {Difficulty} from '../../org/bukkit/Difficulty.js'
import {WorldBorder} from '../../org/bukkit/WorldBorder.js'
import {StructureType} from '../../org/bukkit/StructureType.js'
import {Raid} from '../../org/bukkit/Raid.js'
import {MetadataValue} from '../../org/bukkit/metadata/MetadataValue.js'
import {PluginMessageRecipient} from '../../org/bukkit/plugin/messaging/PluginMessageRecipient.js'
import {Metadatable} from '../../org/bukkit/metadata/Metadatable.js'

export interface World extends PluginMessageRecipient, Metadatable {
	setTime(arg0: number): void;
	getTime(): number;
	getViewDistance(): number;
	getWorldType(): WorldType;
	getTicksPerAnimalSpawns(): number;
	getTicksPerMonsterSpawns(): number;
	isHardcore(): boolean;
	getMonsterSpawnLimit(): number;
	getAnimalSpawnLimit(): number;
	getWaterAnimalSpawnLimit(): number;
	getAmbientSpawnLimit(): number;
	getGameRuleValue(arg0: string): string;
	getGameRuleValue(arg0: GameRule): any;
	playSound(arg0: Location, arg1: Sound, arg2: SoundCategory, arg3: number, arg4: number): void;
	playSound(arg0: Location, arg1: string, arg2: SoundCategory, arg3: number, arg4: number): void;
	playSound(arg0: Location, arg1: Sound, arg2: number, arg3: number): void;
	playSound(arg0: Location, arg1: string, arg2: number, arg3: number): void;
	playEffect(arg0: Location, arg1: Effect, arg2: number): void;
	playEffect(arg0: Location, arg1: Effect, arg2: any): void;
	playEffect(arg0: Location, arg1: Effect, arg2: any, arg3: number): void;
	playEffect(arg0: Location, arg1: Effect, arg2: number, arg3: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: any): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: any): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: any, arg10: boolean): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: any, arg8: boolean): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: any): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: any): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: any): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: any): void;
	rayTraceBlocks(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode): RayTraceResult;
	rayTraceBlocks(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode, arg4: boolean): RayTraceResult;
	rayTraceBlocks(arg0: Location, arg1: Vector, arg2: number): RayTraceResult;
	getNearbyEntities(arg0: Location, arg1: number, arg2: number, arg3: number): any;
	getNearbyEntities(arg0: BoundingBox): any;
	getNearbyEntities(arg0: Location, arg1: number, arg2: number, arg3: number, arg4: any): any;
	getNearbyEntities(arg0: BoundingBox, arg1: any): any;
	getSeed(): number;
	getEnvironment(): World$Environment;
	getGenerator(): ChunkGenerator;
	canGenerateStructures(): boolean;
	isChunkGenerated(arg0: number, arg1: number): boolean;
	isChunkLoaded(arg0: number, arg1: number): boolean;
	isChunkLoaded(arg0: Chunk): boolean;
	getBlockAt(arg0: number, arg1: number, arg2: number): Block;
	getBlockAt(arg0: Location): Block;
	getChunkAt(arg0: Block): Chunk;
	getChunkAt(arg0: Location): Chunk;
	getChunkAt(arg0: number, arg1: number): Chunk;
	loadChunk(arg0: number, arg1: number): void;
	loadChunk(arg0: number, arg1: number, arg2: boolean): boolean;
	loadChunk(arg0: Chunk): void;
	getLoadedChunks(): Array<Chunk>;
	getHighestBlockYAt(arg0: number, arg1: number): number;
	getHighestBlockYAt(arg0: Location): number;
	getHighestBlockAt(arg0: Location): Block;
	getHighestBlockAt(arg0: number, arg1: number): Block;
	isChunkInUse(arg0: number, arg1: number): boolean;
	unloadChunk(arg0: number, arg1: number): boolean;
	unloadChunk(arg0: number, arg1: number, arg2: boolean): boolean;
	unloadChunk(arg0: Chunk): boolean;
	unloadChunkRequest(arg0: number, arg1: number): boolean;
	regenerateChunk(arg0: number, arg1: number): boolean;
	refreshChunk(arg0: number, arg1: number): boolean;
	isChunkForceLoaded(arg0: number, arg1: number): boolean;
	setChunkForceLoaded(arg0: number, arg1: number, arg2: boolean): void;
	getForceLoadedChunks(): any;
	addPluginChunkTicket(arg0: number, arg1: number, arg2: Plugin): boolean;
	removePluginChunkTicket(arg0: number, arg1: number, arg2: Plugin): boolean;
	removePluginChunkTickets(arg0: Plugin): void;
	getPluginChunkTickets(arg0: number, arg1: number): any;
	getPluginChunkTickets(): any;
	dropItem(arg0: Location, arg1: ItemStack): Item;
	dropItemNaturally(arg0: Location, arg1: ItemStack): Item;
	spawnArrow(arg0: Location, arg1: Vector, arg2: number, arg3: number, arg4: any): AbstractArrow;
	spawnArrow(arg0: Location, arg1: Vector, arg2: number, arg3: number): Arrow;
	generateTree(arg0: Location, arg1: TreeType, arg2: BlockChangeDelegate): boolean;
	generateTree(arg0: Location, arg1: TreeType): boolean;
	spawnEntity(arg0: Location, arg1: EntityType): Entity;
	strikeLightning(arg0: Location): LightningStrike;
	strikeLightningEffect(arg0: Location): LightningStrike;
	getEntities(): any;
	getLivingEntities(): any;
	getEntitiesByClass(arg0: Array<any>): any;
	getEntitiesByClass(arg0: any): any;
	getEntitiesByClasses(arg0: Array<any>): any;
	getPlayers(): any;
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: number, arg3: number): RayTraceResult;
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: number, arg3: number, arg4: any): RayTraceResult;
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: number): RayTraceResult;
	rayTraceEntities(arg0: Location, arg1: Vector, arg2: number, arg3: any): RayTraceResult;
	rayTrace(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode, arg4: boolean, arg5: number, arg6: any): RayTraceResult;
	getUID(): string;
	getSpawnLocation(): Location;
	setSpawnLocation(arg0: Location): boolean;
	setSpawnLocation(arg0: number, arg1: number, arg2: number): boolean;
	getFullTime(): number;
	setFullTime(arg0: number): void;
	hasStorm(): boolean;
	setStorm(arg0: boolean): void;
	getWeatherDuration(): number;
	setWeatherDuration(arg0: number): void;
	isThundering(): boolean;
	setThundering(arg0: boolean): void;
	getThunderDuration(): number;
	setThunderDuration(arg0: number): void;
	createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean, arg6: Entity): boolean;
	createExplosion(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
	createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): boolean;
	createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean): boolean;
	createExplosion(arg0: Location, arg1: number, arg2: boolean, arg3: boolean, arg4: Entity): boolean;
	createExplosion(arg0: Location, arg1: number, arg2: boolean, arg3: boolean): boolean;
	createExplosion(arg0: Location, arg1: number, arg2: boolean): boolean;
	createExplosion(arg0: Location, arg1: number): boolean;
	getPVP(): boolean;
	setPVP(arg0: boolean): void;
	getPopulators(): any;
	spawn(arg0: Location, arg1: any): Entity;
	spawn(arg0: Location, arg1: any, arg2: Consumer): Entity;
	spawnFallingBlock(arg0: Location, arg1: Material, arg2: number): FallingBlock;
	spawnFallingBlock(arg0: Location, arg1: MaterialData): FallingBlock;
	spawnFallingBlock(arg0: Location, arg1: BlockData): FallingBlock;
	getEmptyChunkSnapshot(arg0: number, arg1: number, arg2: boolean, arg3: boolean): ChunkSnapshot;
	setSpawnFlags(arg0: boolean, arg1: boolean): void;
	getAllowAnimals(): boolean;
	getAllowMonsters(): boolean;
	getBiome(arg0: number, arg1: number): Biome;
	getBiome(arg0: number, arg1: number, arg2: number): Biome;
	setBiome(arg0: number, arg1: number, arg2: number, arg3: Biome): void;
	setBiome(arg0: number, arg1: number, arg2: Biome): void;
	getTemperature(arg0: number, arg1: number): number;
	getTemperature(arg0: number, arg1: number, arg2: number): number;
	getHumidity(arg0: number, arg1: number): number;
	getHumidity(arg0: number, arg1: number, arg2: number): number;
	getMaxHeight(): number;
	getSeaLevel(): number;
	getKeepSpawnInMemory(): boolean;
	setKeepSpawnInMemory(arg0: boolean): void;
	isAutoSave(): boolean;
	setAutoSave(arg0: boolean): void;
	setDifficulty(arg0: Difficulty): void;
	getDifficulty(): Difficulty;
	getWorldFolder(): any;
	setHardcore(arg0: boolean): void;
	setTicksPerAnimalSpawns(arg0: number): void;
	setTicksPerMonsterSpawns(arg0: number): void;
	setMonsterSpawnLimit(arg0: number): void;
	setAnimalSpawnLimit(arg0: number): void;
	setWaterAnimalSpawnLimit(arg0: number): void;
	setAmbientSpawnLimit(arg0: number): void;
	getGameRules(): Array<string>;
	setGameRuleValue(arg0: string, arg1: string): boolean;
	isGameRule(arg0: string): boolean;
	getGameRuleDefault(arg0: GameRule): any;
	setGameRule(arg0: GameRule, arg1: any): boolean;
	getWorldBorder(): WorldBorder;
	locateNearestStructure(arg0: Location, arg1: StructureType, arg2: number, arg3: boolean): Location;
	locateNearestRaid(arg0: Location, arg1: number): Raid;
	getRaids(): any;
	getName(): string;
	save(): void;
	sendPluginMessage(arg0: Plugin, arg1: string, arg2: Array<number>): void;
	getListeningPluginChannels(): any;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	getMetadata(arg0: string): any;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
}

export class World {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.World');
	}
}

