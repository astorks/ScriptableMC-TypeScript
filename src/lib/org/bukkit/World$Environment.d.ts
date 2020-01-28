export interface World$Environment {
    getId(): number;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class World$Environment {
    static get $javaClass(): any;
    static get NORMAL(): World$Environment;
    static get NETHER(): World$Environment;
    static get THE_END(): World$Environment;
}
