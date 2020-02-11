import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Instrument from '../../../../../org/bukkit/Instrument.js';
import Material from '../../../../../org/bukkit/Material.js';
import Note from '../../../../../org/bukkit/Note.js';
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js';
export default interface NoteBlock extends Powerable {
    getNote(): Note;
    setInstrument(arg0: Instrument): void;
    setNote(arg0: Note): void;
    getInstrument(): Instrument;
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
