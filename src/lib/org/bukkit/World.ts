declare var Java: any;
import {WorldType} from '../../org/bukkit/WorldType.js'
import {GameRule} from '../../org/bukkit/GameRule.js'
import {World$Environment} from '../../org/bukkit/World$Environment.js'
import {ChunkSnapshot} from '../../org/bukkit/ChunkSnapshot.js'
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'
import {LightningStrike} from '../../org/bukkit/entity/LightningStrike.js'
import {Location} from '../../org/bukkit/Location.js'
import {StructureType} from '../../org/bukkit/StructureType.js'
import {BoundingBox} from '../../org/bukkit/util/BoundingBox.js'
import {Chunk} from '../../org/bukkit/Chunk.js'
import {Arrow} from '../../org/bukkit/entity/Arrow.js'
import {Vector} from '../../org/bukkit/util/Vector.js'
import {AbstractArrow} from '../../org/bukkit/entity/AbstractArrow.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../org/bukkit/entity/EntityType.js'
import {Item} from '../../org/bukkit/entity/Item.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {RayTraceResult} from '../../org/bukkit/util/RayTraceResult.js'
import {FluidCollisionMode} from '../../org/bukkit/FluidCollisionMode.js'
import {TreeType} from '../../org/bukkit/TreeType.js'
import {BlockChangeDelegate} from '../../org/bukkit/BlockChangeDelegate.js'
import {Biome} from '../../org/bukkit/block/Biome.js'
import {Difficulty} from '../../org/bukkit/Difficulty.js'
import {Sound} from '../../org/bukkit/Sound.js'
import {SoundCategory} from '../../org/bukkit/SoundCategory.js'
import {FallingBlock} from '../../org/bukkit/entity/FallingBlock.js'
import {Material} from '../../org/bukkit/Material.js'
import {MaterialData} from '../../org/bukkit/material/MaterialData.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {ChunkGenerator} from '../../org/bukkit/generator/ChunkGenerator.js'
import {Consumer} from '../../org/bukkit/util/Consumer.js'
import {Effect} from '../../org/bukkit/Effect.js'
import {Raid} from '../../org/bukkit/Raid.js'
import {WorldBorder} from '../../org/bukkit/WorldBorder.js'
import {Particle} from '../../org/bukkit/Particle.js'
import {MetadataValue} from '../../org/bukkit/metadata/MetadataValue.js'
import {PluginMessageRecipient} from '../../org/bukkit/plugin/messaging/PluginMessageRecipient.js'
import {Metadatable} from '../../org/bukkit/metadata/Metadatable.js'

export interface World extends PluginMessageRecipient, Metadatable {
	getName(): string;
	save(): void;
	getTime(): number;
	setTime(time: number): void;
	getWorldType(): WorldType;
	isHardcore(): boolean;
	getGameRuleValue(rule: GameRule): any;
	getGameRuleValue(rule: string): string;
	getAnimalSpawnLimit(): number;
	getTicksPerMonsterSpawns(): number;
	getTicksPerAnimalSpawns(): number;
	getWaterAnimalSpawnLimit(): number;
	getMonsterSpawnLimit(): number;
	getAmbientSpawnLimit(): number;
	getEnvironment(): World$Environment;
	getEmptyChunkSnapshot(x: number, z: number, includeBiome: boolean, includeBiomeTemp: boolean): ChunkSnapshot;
	getKeepSpawnInMemory(): boolean;
	setKeepSpawnInMemory(keepLoaded: boolean): void;
	getPluginChunkTickets(): any;
	getPluginChunkTickets(x: number, z: number): any;
	canGenerateStructures(): boolean;
	setTicksPerAnimalSpawns(ticksPerAnimalSpawns: number): void;
	removePluginChunkTicket(x: number, z: number, plugin: Plugin): boolean;
	getEntitiesByClasses(classes: Array<any>): any;
	removePluginChunkTickets(plugin: Plugin): void;
	setChunkForceLoaded(x: number, z: number, forced: boolean): void;
	setTicksPerMonsterSpawns(ticksPerMonsterSpawns: number): void;
	setMonsterSpawnLimit(limit: number): void;
	getForceLoadedChunks(): any;
	setAnimalSpawnLimit(limit: number): void;
	addPluginChunkTicket(x: number, z: number, plugin: Plugin): boolean;
	strikeLightningEffect(loc: Location): LightningStrike;
	setWaterAnimalSpawnLimit(limit: number): void;
	locateNearestStructure(origin: Location, structureType: StructureType, radius: number, findUnexplored: boolean): Location;
	setAmbientSpawnLimit(limit: number): void;
	getNearbyEntities(location: Location, x: number, y: number, z: number, filter: any): any;
	getNearbyEntities(location: Location, x: number, y: number, z: number): any;
	getNearbyEntities(boundingBox: BoundingBox, filter: any): any;
	getNearbyEntities(boundingBox: BoundingBox): any;
	loadChunk(x: number, z: number): void;
	loadChunk(x: number, z: number, generate: boolean): boolean;
	loadChunk(chunk: Chunk): void;
	spawnArrow(location: Location, direction: Vector, speed: number, spread: number): Arrow;
	spawnArrow(location: Location, direction: Vector, speed: number, spread: number, clazz: any): AbstractArrow;
	spawnEntity(loc: Location, type: EntityType): Entity;
	isChunkInUse(x: number, z: number): boolean;
	getEntities(): any;
	isChunkLoaded(chunk: Chunk): boolean;
	isChunkLoaded(x: number, z: number): boolean;
	dropItemNaturally(location: Location, item: ItemStack): Item;
	getChunkAt(location: Location): Chunk;
	getChunkAt(block: Block): Chunk;
	getChunkAt(x: number, z: number): Chunk;
	getLoadedChunks(): Array<Chunk>;
	isChunkGenerated(x: number, z: number): boolean;
	getLivingEntities(): any;
	getEntitiesByClass(classes: Array<any>): any;
	getEntitiesByClass(cls: any): any;
	unloadChunk(x: number, z: number): boolean;
	unloadChunk(chunk: Chunk): boolean;
	unloadChunk(x: number, z: number, save: boolean): boolean;
	getPlayers(): any;
	rayTraceBlocks(start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode, ignorePassableBlocks: boolean): RayTraceResult;
	rayTraceBlocks(start: Location, direction: Vector, maxDistance: number): RayTraceResult;
	rayTraceBlocks(start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number, raySize: number): RayTraceResult;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number): RayTraceResult;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number, raySize: number, filter: any): RayTraceResult;
	rayTraceEntities(start: Location, direction: Vector, maxDistance: number, filter: any): RayTraceResult;
	regenerateChunk(x: number, z: number): boolean;
	rayTrace(start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode, ignorePassableBlocks: boolean, raySize: number, filter: any): RayTraceResult;
	getUID(): string;
	unloadChunkRequest(x: number, z: number): boolean;
	refreshChunk(x: number, z: number): boolean;
	generateTree(location: Location, type: TreeType): boolean;
	generateTree(loc: Location, type: TreeType, delegate: BlockChangeDelegate): boolean;
	getHighestBlockAt(location: Location): Block;
	getHighestBlockAt(x: number, z: number): Block;
	isChunkForceLoaded(x: number, z: number): boolean;
	dropItem(location: Location, item: ItemStack): Item;
	strikeLightning(loc: Location): LightningStrike;
	setAutoSave(value: boolean): void;
	setStorm(hasStorm: boolean): void;
	setSpawnFlags(allowMonsters: boolean, allowAnimals: boolean): void;
	getThunderDuration(): number;
	getWeatherDuration(): number;
	getBiome(x: number, z: number): Biome;
	getBiome(x: number, y: number, z: number): Biome;
	setFullTime(time: number): void;
	hasStorm(): boolean;
	getSeaLevel(): number;
	getDifficulty(): Difficulty;
	getWorldFolder(): any;
	setBiome(x: number, z: number, bio: Biome): void;
	setBiome(x: number, y: number, z: number, bio: Biome): void;
	getTemperature(x: number, z: number): number;
	getTemperature(x: number, y: number, z: number): number;
	isThundering(): boolean;
	playSound(location: Location, sound: string, volume: number, pitch: number): void;
	playSound(location: Location, sound: Sound, volume: number, pitch: number): void;
	playSound(location: Location, sound: Sound, category: SoundCategory, volume: number, pitch: number): void;
	playSound(location: Location, sound: string, category: SoundCategory, volume: number, pitch: number): void;
	spawnFallingBlock(location: Location, material: Material, data: number): FallingBlock;
	spawnFallingBlock(location: Location, data: MaterialData): FallingBlock;
	spawnFallingBlock(location: Location, data: BlockData): FallingBlock;
	getGameRules(): Array<string>;
	setWeatherDuration(duration: number): void;
	createExplosion(loc: Location, power: number): boolean;
	createExplosion(x: number, y: number, z: number, power: number, setFire: boolean): boolean;
	createExplosion(loc: Location, power: number, setFire: boolean, breakBlocks: boolean, source: Entity): boolean;
	createExplosion(x: number, y: number, z: number, power: number, setFire: boolean, breakBlocks: boolean): boolean;
	createExplosion(loc: Location, power: number, setFire: boolean): boolean;
	createExplosion(x: number, y: number, z: number, power: number, setFire: boolean, breakBlocks: boolean, source: Entity): boolean;
	createExplosion(loc: Location, power: number, setFire: boolean, breakBlocks: boolean): boolean;
	createExplosion(x: number, y: number, z: number, power: number): boolean;
	getMaxHeight(): number;
	setHardcore(hardcore: boolean): void;
	getHumidity(x: number, z: number): number;
	getHumidity(x: number, y: number, z: number): number;
	setGameRuleValue(rule: string, value: string): boolean;
	isGameRule(rule: string): boolean;
	getGameRuleDefault(rule: GameRule): any;
	getFullTime(): number;
	getPopulators(): any;
	setSpawnLocation(x: number, y: number, z: number): boolean;
	setSpawnLocation(location: Location): boolean;
	getSeed(): number;
	getGenerator(): ChunkGenerator;
	spawn(location: Location, clazz: any): Entity;
	spawn(location: Location, clazz: any, _function: Consumer): Entity;
	getPVP(): boolean;
	playEffect(location: Location, effect: Effect, data: any, radius: number): void;
	playEffect(location: Location, effect: Effect, data: any): void;
	playEffect(location: Location, effect: Effect, data: number, radius: number): void;
	playEffect(location: Location, effect: Effect, data: number): void;
	setThundering(thundering: boolean): void;
	getAllowMonsters(): boolean;
	isAutoSave(): boolean;
	getSpawnLocation(): Location;
	setDifficulty(difficulty: Difficulty): void;
	setThunderDuration(duration: number): void;
	setPVP(pvp: boolean): void;
	getAllowAnimals(): boolean;
	locateNearestRaid(location: Location, radius: number): Raid;
	getWorldBorder(): WorldBorder;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any, force: boolean): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any, force: boolean): void;
	spawnParticle(particle: Particle, location: Location, count: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number): void;
	setGameRule(rule: GameRule, newValue: any): boolean;
	getRaids(): any;
	getHighestBlockYAt(x: number, z: number): number;
	getHighestBlockYAt(location: Location): number;
	getBlockAt(location: Location): Block;
	getBlockAt(x: number, y: number, z: number): Block;
	sendPluginMessage(source: Plugin, channel: string, message: Array<number>): void;
	getListeningPluginChannels(): any;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
	hasMetadata(metadataKey: string): boolean;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
}

export class World {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.World');
	}
}

