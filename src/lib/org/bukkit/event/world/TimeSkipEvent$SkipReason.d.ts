export default interface TimeSkipEvent$SkipReason {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class TimeSkipEvent$SkipReason {
    static get $javaClass(): any;
    static get COMMAND(): TimeSkipEvent$SkipReason;
    static get CUSTOM(): TimeSkipEvent$SkipReason;
    static get NIGHT_SKIP(): TimeSkipEvent$SkipReason;
}
