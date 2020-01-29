export interface Instrument {
    getType(): number;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class Instrument {
    static get $javaClass(): any;
    static get PIANO(): Instrument;
    static get BASS_DRUM(): Instrument;
    static get SNARE_DRUM(): Instrument;
    static get STICKS(): Instrument;
    static get BASS_GUITAR(): Instrument;
    static get FLUTE(): Instrument;
    static get BELL(): Instrument;
    static get GUITAR(): Instrument;
    static get CHIME(): Instrument;
    static get XYLOPHONE(): Instrument;
    static get IRON_XYLOPHONE(): Instrument;
    static get COW_BELL(): Instrument;
    static get DIDGERIDOO(): Instrument;
    static get BIT(): Instrument;
    static get BANJO(): Instrument;
    static get PLING(): Instrument;
}
