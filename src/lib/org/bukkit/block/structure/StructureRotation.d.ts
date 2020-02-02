export default interface StructureRotation {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class StructureRotation {
    static get $javaClass(): any;
    static get NONE(): StructureRotation;
    static get CLOCKWISE_90(): StructureRotation;
    static get CLOCKWISE_180(): StructureRotation;
    static get COUNTERCLOCKWISE_90(): StructureRotation;
}
