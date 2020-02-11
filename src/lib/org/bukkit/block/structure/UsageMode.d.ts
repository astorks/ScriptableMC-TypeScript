export default interface UsageMode {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class UsageMode {
    static get $javaClass(): any;
    static get SAVE(): UsageMode;
    static get LOAD(): UsageMode;
    static get CORNER(): UsageMode;
    static get DATA(): UsageMode;
}
