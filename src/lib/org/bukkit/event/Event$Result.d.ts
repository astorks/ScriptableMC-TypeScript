export default interface Event$Result {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Event$Result {
    static get $javaClass(): any;
    static get DENY(): Event$Result;
    static get DEFAULT(): Event$Result;
    static get ALLOW(): Event$Result;
}
