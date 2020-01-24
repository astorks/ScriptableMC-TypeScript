declare var Java: any;
import {GameRule} from '../../org/bukkit/GameRule.js'
import {BoundingBox} from '../../org/bukkit/util/BoundingBox.js'
import {Location} from '../../org/bukkit/Location.js'
import {WorldType} from '../../org/bukkit/WorldType.js'
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'
import {LightningStrike} from '../../org/bukkit/entity/LightningStrike.js'
import {ChunkSnapshot} from '../../org/bukkit/ChunkSnapshot.js'
import {StructureType} from '../../org/bukkit/StructureType.js'
import {Particle} from '../../org/bukkit/Particle.js'
import {RayTraceResult} from '../../org/bukkit/util/RayTraceResult.js'
import {Vector} from '../../org/bukkit/util/Vector.js'
import {FluidCollisionMode} from '../../org/bukkit/FluidCollisionMode.js'
import {World$Environment} from '../../org/bukkit/World$Environment.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {Effect} from '../../org/bukkit/Effect.js'
import {Sound} from '../../org/bukkit/Sound.js'
import {SoundCategory} from '../../org/bukkit/SoundCategory.js'
import {AbstractArrow} from '../../org/bukkit/entity/AbstractArrow.js'
import {Arrow} from '../../org/bukkit/entity/Arrow.js'
import {Item} from '../../org/bukkit/entity/Item.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../org/bukkit/entity/EntityType.js'
import {TreeType} from '../../org/bukkit/TreeType.js'
import {BlockChangeDelegate} from '../../org/bukkit/BlockChangeDelegate.js'
import {Chunk} from '../../org/bukkit/Chunk.js'
import {ChunkGenerator} from '../../org/bukkit/generator/ChunkGenerator.js'
import {Raid} from '../../org/bukkit/Raid.js'
import {WorldBorder} from '../../org/bukkit/WorldBorder.js'
import {Difficulty} from '../../org/bukkit/Difficulty.js'
import {FallingBlock} from '../../org/bukkit/entity/FallingBlock.js'
import {MaterialData} from '../../org/bukkit/material/MaterialData.js'
import {Material} from '../../org/bukkit/Material.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {Biome} from '../../org/bukkit/block/Biome.js'
import {Consumer} from '../../org/bukkit/util/Consumer.js'
import {MetadataValue} from '../../org/bukkit/metadata/MetadataValue.js'
import {PluginMessageRecipient} from '../../org/bukkit/plugin/messaging/PluginMessageRecipient.js'
import {Metadatable} from '../../org/bukkit/metadata/Metadatable.js'

export interface World extends PluginMessageRecipient, Metadatable {
	getName(): string;
	save(): void;
	getTime(): number;
	setTime(time: number): void;
	getGameRuleValue(rule: GameRule): any;
	getGameRuleValue(rule: string): string;
	getNearbyEntities(boundingBox: BoundingBox): any;
	getNearbyEntities(location: Location, x: number, y: number, z: number, filter: any): any;
	getNearbyEntities(location: Location, x: number, y: number, z: number): any;
	getNearbyEntities(boundingBox: BoundingBox, filter: any): any;
	isHardcore(): boolean;
	getWorldType(): WorldType;
	getMonsterSpawnLimit(): number;
	getTicksPerMonsterSpawns(): number;
	getAnimalSpawnLimit(): number;
	getWaterAnimalSpawnLimit(): number;
	getAmbientSpawnLimit(): number;
	getTicksPerAnimalSpawns(): number;
	addPluginChunkTicket(x: number, z: number, plugin: Plugin): boolean;
	removePluginChunkTicket(x: number, z: number, plugin: Plugin): boolean;
	removePluginChunkTickets(plugin: Plugin): void;
	strikeLightningEffect(loc: Location): LightningStrike;
	getEntitiesByClasses(classes: Array<any>): any;
	setChunkForceLoaded(x: number, z: number, forced: boolean): void;
	getForceLoadedChunks(): any;
	getPluginChunkTickets(x: number, z: number): any;
	getPluginChunkTickets(): any;
	getEmptyChunkSnapshot(x: number, z: number, includeBiome: boolean, includeBiomeTemp: boolean): ChunkSnapshot;
	setKeepSpawnInMemory(keepLoaded: boolean): void;
	setAmbientSpawnLimit(limit: number): void;
	locateNearestStructure(origin: Location, structureType: StructureType, radius: number, findUnexplored: boolean): Location;
	setTicksPerAnimalSpawns(ticksPerAnimalSpawns: number): void;
	setWaterAnimalSpawnLimit(limit: number): void;
	getKeepSpawnInMemory(): boolean;
	setAnimalSpawnLimit(limit: number): void;
	setTicksPerMonsterSpawns(ticksPerMonsterSpawns: number): void;
	canGenerateStructures(): boolean;
	setMonsterSpawnLimit(limit: number): void;
	setSpawnLocation(x: number, y: number, z: number): boolean;
	setSpawnLocation(location: Location): boolean;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any, force: boolean): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any, force: boolean): void;
	spawnParticle(particle: Particle, location: Location, count: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	rayTraceBlocks(start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode, ignorePassableBlocks: boolean): RayTraceResult;
	rayTraceBlocks(start: Location, direction: Vector, maxDistance: number): RayTraceResult;
	rayTraceBlocks(start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
	getHighestBlockYAt(x: number, z: number): number;
	getHighestBlockYAt(location: Location): number;
	getEnvironment(): World$Environment;
	getBlockAt(x: number, y: number, z: number): Block;
	getBlockAt(location: Location): Block;
	playEffect(location: Location, effect: Effect, data: any): void;
	playEffect(location: Location, effect: Effect, data: number, radius: number): void;
	playEffect(location: Location, effect: Effect, data: number): void;
	playEffect(location: Location, effect: Effect, data: any, radius: number): void;
	playSound(location: Location, sound: string, volume: number, pitch: number): void;
	playSound(location: Location, sound: Sound, volume: number, pitch: number): void;
	playSound(location: Location, sound: string, category: SoundCategory, volume: number, pitch: number): void;
	playSound(location: Location, sound: Sound, category: SoundCategory, volume: number, pitch: number): void;
	spawnArrow(location: Location, direction: Vector, speed: number, spread: number, clazz: any): AbstractArrow;
	spawnArrow(location: Location, direction: Vector, speed: number, spread: number): Arrow;
	strikeLightning(loc: Location): LightningStrike;
	regenerateChunk(x: number, z: number): boolean;
	getEntities(): any;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number, raySize: number): RayTraceResult;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number): RayTraceResult;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number, filter: any): RayTraceResult;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number, raySize: number, filter: any): RayTraceResult;
	dropItem(location: Location, item: ItemStack): Item;
	spawnEntity(loc: Location, type: EntityType): Entity;
	getLivingEntities(): any;
	getSpawnLocation(): Location;
	getEntitiesByClass(classes: Array<any>): any;
	getEntitiesByClass(cls: any): any;
	isChunkGenerated(x: number, z: number): boolean;
	generateTree(loc: Location, type: TreeType, delegate: BlockChangeDelegate): boolean;
	generateTree(location: Location, type: TreeType): boolean;
	setFullTime(time: number): void;
	setStorm(hasStorm: boolean): void;
	getWeatherDuration(): number;
	isThundering(): boolean;
	hasStorm(): boolean;
	getPlayers(): any;
	setThunderDuration(duration: number): void;
	setThundering(thundering: boolean): void;
	getSeed(): number;
	setWeatherDuration(duration: number): void;
	getPVP(): boolean;
	unloadChunk(x: number, z: number): boolean;
	unloadChunk(chunk: Chunk): boolean;
	unloadChunk(x: number, z: number, save: boolean): boolean;
	createExplosion(x: number, y: number, z: number, power: number, setFire: boolean): boolean;
	createExplosion(x: number, y: number, z: number, power: number, setFire: boolean, breakBlocks: boolean): boolean;
	createExplosion(loc: Location, power: number): boolean;
	createExplosion(loc: Location, power: number, setFire: boolean): boolean;
	createExplosion(loc: Location, power: number, setFire: boolean, breakBlocks: boolean): boolean;
	createExplosion(loc: Location, power: number, setFire: boolean, breakBlocks: boolean, source: Entity): boolean;
	createExplosion(x: number, y: number, z: number, power: number, setFire: boolean, breakBlocks: boolean, source: Entity): boolean;
	createExplosion(x: number, y: number, z: number, power: number): boolean;
	getUID(): string;
	rayTrace(start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode, ignorePassableBlocks: boolean, raySize: number, filter: any): RayTraceResult;
	getFullTime(): number;
	setPVP(pvp: boolean): void;
	getThunderDuration(): number;
	unloadChunkRequest(x: number, z: number): boolean;
	loadChunk(chunk: Chunk): void;
	loadChunk(x: number, z: number): void;
	loadChunk(x: number, z: number, generate: boolean): boolean;
	getGenerator(): ChunkGenerator;
	getChunkAt(x: number, z: number): Chunk;
	getChunkAt(block: Block): Chunk;
	getChunkAt(location: Location): Chunk;
	refreshChunk(x: number, z: number): boolean;
	dropItemNaturally(location: Location, item: ItemStack): Item;
	isChunkForceLoaded(x: number, z: number): boolean;
	isChunkInUse(x: number, z: number): boolean;
	getLoadedChunks(): Array<Chunk>;
	getHighestBlockAt(location: Location): Block;
	getHighestBlockAt(x: number, z: number): Block;
	isChunkLoaded(x: number, z: number): boolean;
	isChunkLoaded(chunk: Chunk): boolean;
	getAllowAnimals(): boolean;
	setGameRule(rule: GameRule, newValue: any): boolean;
	setSpawnFlags(allowMonsters: boolean, allowAnimals: boolean): void;
	locateNearestRaid(location: Location, radius: number): Raid;
	isAutoSave(): boolean;
	getTemperature(x: number, y: number, z: number): number;
	getTemperature(x: number, z: number): number;
	isGameRule(rule: string): boolean;
	getHumidity(x: number, y: number, z: number): number;
	getHumidity(x: number, z: number): number;
	getWorldBorder(): WorldBorder;
	getRaids(): any;
	getSeaLevel(): number;
	setAutoSave(value: boolean): void;
	setDifficulty(difficulty: Difficulty): void;
	spawnFallingBlock(location: Location, data: MaterialData): FallingBlock;
	spawnFallingBlock(location: Location, material: Material, data: number): FallingBlock;
	spawnFallingBlock(location: Location, data: BlockData): FallingBlock;
	setGameRuleValue(rule: string, value: string): boolean;
	setBiome(x: number, z: number, bio: Biome): void;
	setBiome(x: number, y: number, z: number, bio: Biome): void;
	getPopulators(): any;
	getMaxHeight(): number;
	getDifficulty(): Difficulty;
	getAllowMonsters(): boolean;
	getGameRuleDefault(rule: GameRule): any;
	spawn(location: Location, clazz: any, _function: Consumer): Entity;
	spawn(location: Location, clazz: any): Entity;
	getWorldFolder(): any;
	setHardcore(hardcore: boolean): void;
	getGameRules(): Array<string>;
	getBiome(x: number, y: number, z: number): Biome;
	getBiome(x: number, z: number): Biome;
	sendPluginMessage(source: Plugin, channel: string, message: Array<number>): void;
	getListeningPluginChannels(): any;
	hasMetadata(metadataKey: string): boolean;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
}

export class World {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.World');
	}
}

