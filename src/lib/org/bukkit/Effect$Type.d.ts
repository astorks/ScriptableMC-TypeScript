export interface Effect$Type {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class Effect$Type {
    static get $javaClass(): any;
    static get SOUND(): Effect$Type;
    static get VISUAL(): Effect$Type;
}
