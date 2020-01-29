import { Warning } from '../../org/bukkit/Warning.js';
export interface Warning$WarningState {
    printFor(warning: Warning): boolean;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class Warning$WarningState {
    static get $javaClass(): any;
    static get ON(): Warning$WarningState;
    static get OFF(): Warning$WarningState;
    static get DEFAULT(): Warning$WarningState;
}
