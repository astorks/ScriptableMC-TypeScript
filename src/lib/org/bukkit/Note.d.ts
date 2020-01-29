import { Note$Tone } from '../../org/bukkit/Note$Tone.js';
export interface Note {
    getId(): number;
    getTone(): Note$Tone;
    sharped(): Note;
    getOctave(): number;
    flattened(): Note;
    isSharped(): boolean;
}
export declare class Note {
    static get $javaClass(): any;
    constructor(note: number);
    constructor(octave: number, tone: Note$Tone, sharped: boolean);
    static sharp(octave: number, tone: Note$Tone): Note;
    static natural(octave: number, tone: Note$Tone): Note;
    static flat(octave: number, tone: Note$Tone): Note;
}
