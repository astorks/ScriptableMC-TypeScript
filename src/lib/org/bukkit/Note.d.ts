import Note$Tone from '../../org/bukkit/Note$Tone.js';
export default interface Note {
    getId(): number;
    sharped(): Note;
    getTone(): Note$Tone;
    flattened(): Note;
    isSharped(): boolean;
    getOctave(): number;
}
export default class Note {
    static get $javaClass(): any;
    constructor(note: number);
    constructor(octave: number, tone: Note$Tone, sharped: boolean);
    static natural(octave: number, tone: Note$Tone): Note;
    static flat(octave: number, tone: Note$Tone): Note;
    static sharp(octave: number, tone: Note$Tone): Note;
}
