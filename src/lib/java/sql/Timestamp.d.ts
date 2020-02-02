export default interface Timestamp {
    setTime(arg0: number): void;
    getTime(): number;
    toInstant(): any;
    getNanos(): number;
    setNanos(arg0: number): void;
    toLocalDateTime(): any;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    compareTo(arg0: Timestamp): number;
    before(arg0: Timestamp): boolean;
    after(arg0: Timestamp): boolean;
    getDate(): number;
    getYear(): number;
    setYear(arg0: number): void;
    getMonth(): number;
    setMonth(arg0: number): void;
    setDate(arg0: number): void;
    getDay(): number;
    getHours(): number;
    setHours(arg0: number): void;
    getMinutes(): number;
    setMinutes(arg0: number): void;
    getSeconds(): number;
    setSeconds(arg0: number): void;
    toLocaleString(): string;
    toGMTString(): string;
    getTimezoneOffset(): number;
    clone(): any;
    before(arg0: any): boolean;
    after(arg0: any): boolean;
}
export default class Timestamp {
    static get $javaClass(): any;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    constructor(arg0: number);
    static from(arg0: any): Timestamp;
    static from(arg0: any): any;
    static valueOf(arg0: string): Timestamp;
    static valueOf(arg0: any): Timestamp;
    static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    static parse(arg0: string): number;
}
