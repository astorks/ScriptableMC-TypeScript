import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Instrument from '../../../../org/bukkit/Instrument.js';
import Note from '../../../../org/bukkit/Note.js';
export default interface NotePlayEvent extends BlockEvent, Cancellable {
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getInstrument(): Instrument;
    getNote(): Note;
    setNote(note: Note): void;
    setInstrument(instrument: Instrument): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class NotePlayEvent {
    static get $javaClass(): any;
    constructor(block: Block, instrument: Instrument, note: Note);
    static getHandlerList(): HandlerList;
}
