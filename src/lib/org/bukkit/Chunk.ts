declare var Java: any;
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {World} from '../../org/bukkit/World.js'
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {BlockState} from '../../org/bukkit/block/BlockState.js'
import {ChunkSnapshot} from '../../org/bukkit/ChunkSnapshot.js'

export interface Chunk {
	contains(block: BlockData): boolean;
	load(generate: boolean): boolean;
	load(): boolean;
	isLoaded(): boolean;
	unload(): boolean;
	unload(save: boolean): boolean;
	getBlock(x: number, y: number, z: number): Block;
	getWorld(): World;
	addPluginChunkTicket(plugin: Plugin): boolean;
	removePluginChunkTicket(plugin: Plugin): boolean;
	getPluginChunkTickets(): any;
	getEntities(): Array<Entity>;
	getZ(): number;
	getX(): number;
	isForceLoaded(): boolean;
	setInhabitedTime(ticks: number): void;
	getTileEntities(): Array<BlockState>;
	isSlimeChunk(): boolean;
	getChunkSnapshot(includeMaxblocky: boolean, includeBiome: boolean, includeBiomeTempRain: boolean): ChunkSnapshot;
	getChunkSnapshot(): ChunkSnapshot;
	setForceLoaded(forced: boolean): void;
	getInhabitedTime(): number;
}

export class Chunk {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Chunk');
	}
}

