import Note$Tone from '../../org/bukkit/Note$Tone.js';
export default interface Note {
    getId(): number;
    getOctave(): number;
    sharped(): Note;
    flattened(): Note;
    getTone(): Note$Tone;
    isSharped(): boolean;
}
export default class Note {
    static get $javaClass(): any;
    constructor(note: number);
    constructor(octave: number, tone: Note$Tone, sharped: boolean);
    static natural(octave: number, tone: Note$Tone): Note;
    static sharp(octave: number, tone: Note$Tone): Note;
    static flat(octave: number, tone: Note$Tone): Note;
}
