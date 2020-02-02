import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Instrument from '../../../../../org/bukkit/Instrument.js';
import Material from '../../../../../org/bukkit/Material.js';
import Note from '../../../../../org/bukkit/Note.js';
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js';
export default interface NoteBlock extends Powerable {
    getInstrument(): Instrument;
    getNote(): Note;
    setNote(arg0: Note): void;
    setInstrument(arg0: Instrument): void;
    isPowered(): boolean;
    setPowered(arg0: boolean): void;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class NoteBlock {
    static get $javaClass(): any;
}
