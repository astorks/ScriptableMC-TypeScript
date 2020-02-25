declare var Java: any;
import Note$Tone from '../../org/bukkit/Note$Tone.js'

export default interface Note {
	flattened(): Note;
	getId(): number;
	getOctave(): number;
	getTone(): Note$Tone;
	isSharped(): boolean;
	sharped(): Note;
}

export default class Note {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Note');
	}

	constructor(note: number);
	constructor(octave: number, tone: Note$Tone, sharped: boolean);
	constructor(...args: any[]) {
		return new Note.$javaClass(...args);
	}

	public static flat(octave: number, tone: Note$Tone): Note;
	public static flat(...args: any[]): any {
		return Note.$javaClass.flat(...args);
	}

	public static natural(octave: number, tone: Note$Tone): Note;
	public static natural(...args: any[]): any {
		return Note.$javaClass.natural(...args);
	}

	public static sharp(octave: number, tone: Note$Tone): Note;
	public static sharp(...args: any[]): any {
		return Note.$javaClass.sharp(...args);
	}

}

