export interface CreeperPowerEvent$PowerCause {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class CreeperPowerEvent$PowerCause {
    static get $javaClass(): any;
    static get LIGHTNING(): CreeperPowerEvent$PowerCause;
    static get SET_ON(): CreeperPowerEvent$PowerCause;
    static get SET_OFF(): CreeperPowerEvent$PowerCause;
}
