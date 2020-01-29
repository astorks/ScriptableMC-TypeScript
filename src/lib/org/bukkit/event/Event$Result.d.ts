export interface Event$Result {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class Event$Result {
    static get $javaClass(): any;
    static get DENY(): Event$Result;
    static get DEFAULT(): Event$Result;
    static get ALLOW(): Event$Result;
}
