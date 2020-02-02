import Warning from '../../org/bukkit/Warning.js';
export default interface Warning$WarningState {
    printFor(warning: Warning): boolean;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Warning$WarningState {
    static get $javaClass(): any;
    static get ON(): Warning$WarningState;
    static get OFF(): Warning$WarningState;
    static get DEFAULT(): Warning$WarningState;
}
