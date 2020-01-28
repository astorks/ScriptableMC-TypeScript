import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Instrument } from '../../../../org/bukkit/Instrument.js';
import { Note } from '../../../../org/bukkit/Note.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface NotePlayEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setInstrument(instrument: Instrument): void;
    setNote(note: Note): void;
    getInstrument(): Instrument;
    getNote(): Note;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class NotePlayEvent {
    static get $javaClass(): any;
    constructor(block: Block, instrument: Instrument, note: Note);
    static getHandlerList(): HandlerList;
}
