export interface FireworkEffect$Type {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class FireworkEffect$Type {
    static get $javaClass(): any;
    static get BALL(): FireworkEffect$Type;
    static get BALL_LARGE(): FireworkEffect$Type;
    static get STAR(): FireworkEffect$Type;
    static get BURST(): FireworkEffect$Type;
    static get CREEPER(): FireworkEffect$Type;
}
