export interface LightningStrikeEvent$Cause {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class LightningStrikeEvent$Cause {
    static get $javaClass(): any;
    static get COMMAND(): LightningStrikeEvent$Cause;
    static get TRIDENT(): LightningStrikeEvent$Cause;
    static get TRAP(): LightningStrikeEvent$Cause;
    static get WEATHER(): LightningStrikeEvent$Cause;
    static get UNKNOWN(): LightningStrikeEvent$Cause;
}
