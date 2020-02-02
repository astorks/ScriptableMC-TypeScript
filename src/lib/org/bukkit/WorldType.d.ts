export default interface WorldType {
    getName(): string;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class WorldType {
    static get $javaClass(): any;
    static get NORMAL(): WorldType;
    static get FLAT(): WorldType;
    static get VERSION_1_1(): WorldType;
    static get LARGE_BIOMES(): WorldType;
    static get AMPLIFIED(): WorldType;
    static get CUSTOMIZED(): WorldType;
    static get BUFFET(): WorldType;
}
