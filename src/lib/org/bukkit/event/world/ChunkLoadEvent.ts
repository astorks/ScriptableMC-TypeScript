declare var Java: any;
import Chunk from '../../../../org/bukkit/Chunk.js'
import ChunkEvent from '../../../../org/bukkit/event/world/ChunkEvent.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import World from '../../../../org/bukkit/World.js'

export default interface ChunkLoadEvent extends ChunkEvent {
	getChunk(): Chunk;
	getEventName(): string;
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
	isNewChunk(): boolean;
}

export default class ChunkLoadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.ChunkLoadEvent');
	}

	constructor(chunk: Chunk, newChunk: boolean);
	constructor(...args: any[]) {
		return new ChunkLoadEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ChunkLoadEvent.$javaClass.getHandlerList(...args);
	}

}

