declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Instrument from '../../../../org/bukkit/Instrument.js'
import Note from '../../../../org/bukkit/Note.js'

export default interface NotePlayEvent extends BlockEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	setNote(note: Note): void;
	getInstrument(): Instrument;
	setInstrument(instrument: Instrument): void;
	getNote(): Note;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class NotePlayEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.NotePlayEvent');
	}
	constructor(block: Block, instrument: Instrument, note: Note);
	constructor(...args: any[]) {
		return new NotePlayEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return NotePlayEvent.$javaClass.getHandlerList(...args);
	}
}

