declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface SignChangeEvent extends BlockEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	setCancelled(cancel: boolean): void;
	getLine(index: number): string;
	setLine(index: number, line: string): void;
	getLines(): Array<string>;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class SignChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.SignChangeEvent');
	}
	constructor(theBlock: Block, thePlayer: Player, theLines: Array<string>);
	constructor(...args: any[]) {
		return new SignChangeEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return SignChangeEvent.$javaClass.getHandlerList(...args);
	}
}

