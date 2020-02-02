export default interface Time {
    setTime(arg0: number): void;
    getDate(): number;
    getYear(): number;
    setYear(arg0: number): void;
    getMonth(): number;
    setMonth(arg0: number): void;
    setDate(arg0: number): void;
    getDay(): number;
    toInstant(): any;
    toLocalTime(): any;
    getTime(): number;
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
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    before(arg0: any): boolean;
    after(arg0: any): boolean;
}
export default class Time {
    static get $javaClass(): any;
    constructor(arg0: number, arg1: number, arg2: number);
    constructor(arg0: number);
    static valueOf(arg0: string): Time;
    static valueOf(arg0: any): Time;
    static from(arg0: any): any;
    static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    static parse(arg0: string): number;
}
