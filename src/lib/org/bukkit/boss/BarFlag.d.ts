export interface BarFlag {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class BarFlag {
    static get $javaClass(): any;
    static get DARKEN_SKY(): BarFlag;
    static get PLAY_BOSS_MUSIC(): BarFlag;
    static get CREATE_FOG(): BarFlag;
}
