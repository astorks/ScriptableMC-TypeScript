declare var Java: any;
import Block from '../../org/bukkit/block/Block.js'
import BlockData from '../../org/bukkit/block/data/BlockData.js'
import BlockState from '../../org/bukkit/block/BlockState.js'
import ChunkSnapshot from '../../org/bukkit/ChunkSnapshot.js'
import Entity from '../../org/bukkit/entity/Entity.js'
import Plugin from '../../org/bukkit/plugin/Plugin.js'
import World from '../../org/bukkit/World.js'

export default interface Chunk {
	addPluginChunkTicket(arg0: Plugin): boolean;
	contains(arg0: BlockData): boolean;
	getBlock(arg0: number, arg1: number, arg2: number): Block;
	getChunkSnapshot(): ChunkSnapshot;
	getChunkSnapshot(arg0: boolean, arg1: boolean, arg2: boolean): ChunkSnapshot;
	getEntities(): Array<Entity>;
	getInhabitedTime(): number;
	getPluginChunkTickets(): any;
	getTileEntities(): Array<BlockState>;
	getWorld(): World;
	getX(): number;
	getZ(): number;
	isForceLoaded(): boolean;
	isLoaded(): boolean;
	isSlimeChunk(): boolean;
	load(): boolean;
	load(arg0: boolean): boolean;
	removePluginChunkTicket(arg0: Plugin): boolean;
	setForceLoaded(arg0: boolean): void;
	setInhabitedTime(arg0: number): void;
	unload(): boolean;
	unload(arg0: boolean): boolean;
}

export default class Chunk {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Chunk');
	}

}

