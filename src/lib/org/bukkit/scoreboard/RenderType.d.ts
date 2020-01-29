export interface RenderType {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class RenderType {
    static get $javaClass(): any;
    static get INTEGER(): RenderType;
    static get HEARTS(): RenderType;
}
