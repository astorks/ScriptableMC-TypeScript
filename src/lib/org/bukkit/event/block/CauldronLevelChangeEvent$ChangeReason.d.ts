export interface CauldronLevelChangeEvent$ChangeReason {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class CauldronLevelChangeEvent$ChangeReason {
    static get $javaClass(): any;
    static get BUCKET_FILL(): CauldronLevelChangeEvent$ChangeReason;
    static get BUCKET_EMPTY(): CauldronLevelChangeEvent$ChangeReason;
    static get BOTTLE_FILL(): CauldronLevelChangeEvent$ChangeReason;
    static get BOTTLE_EMPTY(): CauldronLevelChangeEvent$ChangeReason;
    static get BANNER_WASH(): CauldronLevelChangeEvent$ChangeReason;
    static get ARMOR_WASH(): CauldronLevelChangeEvent$ChangeReason;
    static get EXTINGUISH(): CauldronLevelChangeEvent$ChangeReason;
    static get EVAPORATE(): CauldronLevelChangeEvent$ChangeReason;
    static get UNKNOWN(): CauldronLevelChangeEvent$ChangeReason;
}
