import Note$Tone from '../../org/bukkit/Note$Tone.js';
export default interface Note {
    getId(): number;
    getOctave(): number;
    getTone(): Note$Tone;
    sharped(): Note;
    flattened(): Note;
    isSharped(): boolean;
}
export default class Note {
    static get $javaClass(): any;
    constructor(note: number);
    constructor(octave: number, tone: Note$Tone, sharped: boolean);
    static flat(octave: number, tone: Note$Tone): Note;
    static sharp(octave: number, tone: Note$Tone): Note;
    static natural(octave: number, tone: Note$Tone): Note;
}
