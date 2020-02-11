export default interface ObjectStreamField {
    isPrimitive(): boolean;
    compareTo(obj: any): number;
    getName(): string;
    getType(): any;
    getTypeCode(): string;
    getTypeString(): string;
    getOffset(): number;
    isUnshared(): boolean;
}
export default class ObjectStreamField {
    static get $javaClass(): any;
    constructor(_name: string, type: any, unshared: boolean);
    constructor(_name: string, type: any);
}
