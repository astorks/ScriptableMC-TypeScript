export interface TreeType {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class TreeType {
    static get $javaClass(): any;
    static get TREE(): TreeType;
    static get BIG_TREE(): TreeType;
    static get REDWOOD(): TreeType;
    static get TALL_REDWOOD(): TreeType;
    static get BIRCH(): TreeType;
    static get JUNGLE(): TreeType;
    static get SMALL_JUNGLE(): TreeType;
    static get COCOA_TREE(): TreeType;
    static get JUNGLE_BUSH(): TreeType;
    static get RED_MUSHROOM(): TreeType;
    static get BROWN_MUSHROOM(): TreeType;
    static get SWAMP(): TreeType;
    static get ACACIA(): TreeType;
    static get DARK_OAK(): TreeType;
    static get MEGA_REDWOOD(): TreeType;
    static get TALL_BIRCH(): TreeType;
    static get CHORUS_PLANT(): TreeType;
}
