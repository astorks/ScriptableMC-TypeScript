export interface DragType {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class DragType {
    static get $javaClass(): any;
    static get SINGLE(): DragType;
    static get EVEN(): DragType;
}
