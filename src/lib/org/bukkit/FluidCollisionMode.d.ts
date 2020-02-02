export default interface FluidCollisionMode {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class FluidCollisionMode {
    static get $javaClass(): any;
    static get NEVER(): FluidCollisionMode;
    static get SOURCE_ONLY(): FluidCollisionMode;
    static get ALWAYS(): FluidCollisionMode;
}
