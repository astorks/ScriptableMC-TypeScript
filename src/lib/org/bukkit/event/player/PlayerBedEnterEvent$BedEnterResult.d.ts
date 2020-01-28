export interface PlayerBedEnterEvent$BedEnterResult {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class PlayerBedEnterEvent$BedEnterResult {
    static get $javaClass(): any;
    static get OK(): PlayerBedEnterEvent$BedEnterResult;
    static get NOT_POSSIBLE_HERE(): PlayerBedEnterEvent$BedEnterResult;
    static get NOT_POSSIBLE_NOW(): PlayerBedEnterEvent$BedEnterResult;
    static get TOO_FAR_AWAY(): PlayerBedEnterEvent$BedEnterResult;
    static get NOT_SAFE(): PlayerBedEnterEvent$BedEnterResult;
    static get OTHER_PROBLEM(): PlayerBedEnterEvent$BedEnterResult;
}
