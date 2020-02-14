declare var Java: any;
import Chunk from '../../../../org/bukkit/Chunk.js'
import ChunkEvent from '../../../../org/bukkit/event/world/ChunkEvent.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import World from '../../../../org/bukkit/World.js'

export default interface ChunkUnloadEvent extends ChunkEvent {
	getChunk(): Chunk;
	getEventName(): string;
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
	isSaveChunk(): boolean;
	setSaveChunk(saveChunk: boolean): void;
}

export default class ChunkUnloadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.ChunkUnloadEvent');
	}

	constructor(chunk: Chunk);
	constructor(chunk: Chunk, save: boolean);
	constructor(...args: any[]) {
		return new ChunkUnloadEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ChunkUnloadEvent.$javaClass.getHandlerList(...args);
	}

}

