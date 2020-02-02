export default interface Date {
    setTime(arg0: number): void;
    getHours(): number;
    setHours(arg0: number): void;
    getMinutes(): number;
    setMinutes(arg0: number): void;
    getSeconds(): number;
    setSeconds(arg0: number): void;
    toInstant(): any;
    toLocalDate(): any;
    getTime(): number;
    getDate(): number;
    getYear(): number;
    setYear(arg0: number): void;
    getMonth(): number;
    setMonth(arg0: number): void;
    setDate(arg0: number): void;
    getDay(): number;
    toLocaleString(): string;
    toGMTString(): string;
    getTimezoneOffset(): number;
    clone(): any;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    before(arg0: any): boolean;
    after(arg0: any): boolean;
}
export default class Date {
    static get $javaClass(): any;
    constructor(arg0: number);
    constructor(arg0: number, arg1: number, arg2: number);
    static valueOf(arg0: string): Date;
    static valueOf(arg0: any): Date;
    static from(arg0: any): any;
    static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    static parse(arg0: string): number;
}
