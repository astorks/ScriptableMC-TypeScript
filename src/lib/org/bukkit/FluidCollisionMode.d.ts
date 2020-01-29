export interface FluidCollisionMode {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class FluidCollisionMode {
    static get $javaClass(): any;
    static get NEVER(): FluidCollisionMode;
    static get SOURCE_ONLY(): FluidCollisionMode;
    static get ALWAYS(): FluidCollisionMode;
}
