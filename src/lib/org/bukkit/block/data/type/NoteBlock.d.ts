import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Instrument from '../../../../../org/bukkit/Instrument.js';
import Material from '../../../../../org/bukkit/Material.js';
import Note from '../../../../../org/bukkit/Note.js';
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js';
export default interface NoteBlock extends Powerable {
    setNote(arg0: Note): void;
    getInstrument(): Instrument;
    setInstrument(arg0: Instrument): void;
    getNote(): Note;
    isPowered(): boolean;
    setPowered(arg0: boolean): void;
    getMaterial(): Material;
    getAsString(arg0: boolean): string;
    getAsString(): string;
    clone(): BlockData;
    clone(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
}
export default class NoteBlock {
    static get $javaClass(): any;
}
