declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Instrument from '../../../../../org/bukkit/Instrument.js'
import Material from '../../../../../org/bukkit/Material.js'
import Note from '../../../../../org/bukkit/Note.js'
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js'

export default interface NoteBlock extends Powerable {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getInstrument(): Instrument;
	getMaterial(): Material;
	getNote(): Note;
	isPowered(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setInstrument(arg0: Instrument): void;
	setNote(arg0: Note): void;
	setPowered(arg0: boolean): void;
}

export default class NoteBlock {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.NoteBlock');
	}

}

