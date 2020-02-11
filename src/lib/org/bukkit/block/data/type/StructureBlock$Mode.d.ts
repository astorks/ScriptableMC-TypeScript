export default interface StructureBlock$Mode {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class StructureBlock$Mode {
    static get $javaClass(): any;
    static get SAVE(): StructureBlock$Mode;
    static get LOAD(): StructureBlock$Mode;
    static get CORNER(): StructureBlock$Mode;
    static get DATA(): StructureBlock$Mode;
}
