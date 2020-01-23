declare var Java: any;
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {World} from '../../org/bukkit/World.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {ChunkSnapshot} from '../../org/bukkit/ChunkSnapshot.js'
import {BlockState} from '../../org/bukkit/block/BlockState.js'

export interface Chunk {
	contains(block: BlockData): boolean;
	load(generate: boolean): boolean;
	load(): boolean;
	isLoaded(): boolean;
	unload(): boolean;
	unload(save: boolean): boolean;
	getWorld(): World;
	getBlock(x: number, y: number, z: number): Block;
	getPluginChunkTickets(): any;
	removePluginChunkTicket(plugin: Plugin): boolean;
	addPluginChunkTicket(plugin: Plugin): boolean;
	getZ(): number;
	getX(): number;
	getEntities(): Array<Entity>;
	getInhabitedTime(): number;
	isForceLoaded(): boolean;
	isSlimeChunk(): boolean;
	getChunkSnapshot(includeMaxblocky: boolean, includeBiome: boolean, includeBiomeTempRain: boolean): ChunkSnapshot;
	getChunkSnapshot(): ChunkSnapshot;
	getTileEntities(): Array<BlockState>;
	setForceLoaded(forced: boolean): void;
	setInhabitedTime(ticks: number): void;
}

export class Chunk {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Chunk');
	}
}

