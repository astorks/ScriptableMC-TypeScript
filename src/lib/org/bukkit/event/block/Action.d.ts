export interface Action {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class Action {
    static get $javaClass(): any;
    static get LEFT_CLICK_BLOCK(): Action;
    static get RIGHT_CLICK_BLOCK(): Action;
    static get LEFT_CLICK_AIR(): Action;
    static get RIGHT_CLICK_AIR(): Action;
    static get PHYSICAL(): Action;
}
