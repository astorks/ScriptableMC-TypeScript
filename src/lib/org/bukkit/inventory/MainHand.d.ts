export interface MainHand {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class MainHand {
    static get $javaClass(): any;
    static get LEFT(): MainHand;
    static get RIGHT(): MainHand;
}
