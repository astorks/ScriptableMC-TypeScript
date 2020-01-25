declare var Java: any;
import {World} from '../../org/bukkit/World.js'
import {Block} from '../../org/bukkit/block/Block.js'
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {ChunkSnapshot} from '../../org/bukkit/ChunkSnapshot.js'
import {BlockState} from '../../org/bukkit/block/BlockState.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'

export interface Chunk {
	isLoaded(): boolean;
	getWorld(): World;
	getBlock(arg0: number, arg1: number, arg2: number): Block;
	addPluginChunkTicket(arg0: Plugin): boolean;
	removePluginChunkTicket(arg0: Plugin): boolean;
	getPluginChunkTickets(): any;
	getEntities(): Array<Entity>;
	getX(): number;
	getZ(): number;
	getChunkSnapshot(): ChunkSnapshot;
	getChunkSnapshot(arg0: boolean, arg1: boolean, arg2: boolean): ChunkSnapshot;
	getTileEntities(): Array<BlockState>;
	isSlimeChunk(): boolean;
	isForceLoaded(): boolean;
	setForceLoaded(arg0: boolean): void;
	getInhabitedTime(): number;
	setInhabitedTime(arg0: number): void;
	contains(arg0: BlockData): boolean;
	load(arg0: boolean): boolean;
	load(): boolean;
	unload(arg0: boolean): boolean;
	unload(): boolean;
}

export class Chunk {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Chunk');
	}
}

