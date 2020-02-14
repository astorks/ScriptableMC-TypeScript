declare var Java: any;
import Chunk from '../../../../org/bukkit/Chunk.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from '../../../../org/bukkit/event/world/WorldEvent.js'

export default interface ChunkEvent extends WorldEvent {
	getChunk(): Chunk;
	getEventName(): string;
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class ChunkEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.ChunkEvent');
	}

}

