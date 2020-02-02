export default interface RaidStopEvent$Reason {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class RaidStopEvent$Reason {
    static get $javaClass(): any;
    static get PEACE(): RaidStopEvent$Reason;
    static get TIMEOUT(): RaidStopEvent$Reason;
    static get FINISHED(): RaidStopEvent$Reason;
    static get UNSPAWNABLE(): RaidStopEvent$Reason;
    static get NOT_IN_VILLAGE(): RaidStopEvent$Reason;
}
