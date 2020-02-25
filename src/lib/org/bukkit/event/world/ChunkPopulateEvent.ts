declare var Java: any;
import Chunk from '../../../../org/bukkit/Chunk.js'
import ChunkEvent from '../../../../org/bukkit/event/world/ChunkEvent.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import World from '../../../../org/bukkit/World.js'

export default interface ChunkPopulateEvent extends ChunkEvent {
	getChunk(): Chunk;
	getEventName(): string;
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class ChunkPopulateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.ChunkPopulateEvent');
	}

	constructor(chunk: Chunk);
	constructor(...args: any[]) {
		return new ChunkPopulateEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ChunkPopulateEvent.$javaClass.getHandlerList(...args);
	}

}

