export default interface DragType {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class DragType {
    static get $javaClass(): any;
    static get SINGLE(): DragType;
    static get EVEN(): DragType;
}
