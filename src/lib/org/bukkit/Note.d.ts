import { Note$Tone } from '../../org/bukkit/Note$Tone.js';
export interface Note {
    sharped(): Note;
    flattened(): Note;
    getOctave(): number;
    getTone(): Note$Tone;
    isSharped(): boolean;
    getId(): number;
}
export declare class Note {
    static get $javaClass(): any;
    constructor(note: number);
    constructor(octave: number, tone: Note$Tone, sharped: boolean);
    static flat(octave: number, tone: Note$Tone): Note;
    static sharp(octave: number, tone: Note$Tone): Note;
    static natural(octave: number, tone: Note$Tone): Note;
}
