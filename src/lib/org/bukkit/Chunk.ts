declare var Java: any;
import Block from './block/Block.js'
import BlockData from './block/data/BlockData.js'
import BlockState from './block/BlockState.js'
import ChunkSnapshot from './ChunkSnapshot.js'
import Entity from './entity/Entity.js'
import PersistentDataContainer from './persistence/PersistentDataContainer.js'
import PersistentDataHolder from './persistence/PersistentDataHolder.js'
import Plugin from './plugin/Plugin.js'
import World from './World.js'

export default interface Chunk extends PersistentDataHolder {
	addPluginChunkTicket(arg0: Plugin): boolean;
	contains(arg0: BlockData): boolean;
	getBlock(arg0: number, arg1: number, arg2: number): Block;
	getChunkSnapshot(): ChunkSnapshot;
	getChunkSnapshot(arg0: boolean, arg1: boolean, arg2: boolean): ChunkSnapshot;
	getEntities(): Array<Entity>;
	getInhabitedTime(): number;
	getPersistentDataContainer(): PersistentDataContainer;
	getPluginChunkTickets(): Array<Plugin>;
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

