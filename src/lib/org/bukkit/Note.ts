declare var Java: any;
import {Note$Tone} from '../../org/bukkit/Note$Tone.js'

export interface Note {
	getId(): number;
	sharped(): Note;
	flattened(): Note;
	getOctave(): number;
	getTone(): Note$Tone;
	isSharped(): boolean;
}

export class Note {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Note');
	}
	constructor(note: number);
	constructor(octave: number, tone: Note$Tone, sharped: boolean);
	constructor(...args: any[]) {
		return new Note.$javaClass(...args);
	}
}

