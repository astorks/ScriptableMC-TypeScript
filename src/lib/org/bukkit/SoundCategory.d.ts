export interface SoundCategory {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class SoundCategory {
    static get $javaClass(): any;
    static get MASTER(): SoundCategory;
    static get MUSIC(): SoundCategory;
    static get RECORDS(): SoundCategory;
    static get WEATHER(): SoundCategory;
    static get BLOCKS(): SoundCategory;
    static get HOSTILE(): SoundCategory;
    static get NEUTRAL(): SoundCategory;
    static get PLAYERS(): SoundCategory;
    static get AMBIENT(): SoundCategory;
    static get VOICE(): SoundCategory;
}
