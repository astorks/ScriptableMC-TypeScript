export default interface Date {
    getSeconds(): number;
    toInstant(): any;
    setTime(date: number): void;
    getHours(): number;
    setHours(i: number): void;
    getMinutes(): number;
    setMinutes(i: number): void;
    setSeconds(i: number): void;
    toLocalDate(): any;
    clone(): any;
    compareTo(arg0: any): number;
    compareTo(anotherDate: any): number;
    getYear(): number;
    before(when: any): boolean;
    after(when: any): boolean;
    getDate(): number;
    getTime(): number;
    setYear(year: number): void;
    getMonth(): number;
    setMonth(month: number): void;
    setDate(date: number): void;
    getDay(): number;
    toLocaleString(): string;
    toGMTString(): string;
    getTimezoneOffset(): number;
}
export default class Date {
    static get $javaClass(): any;
    constructor(year: number, month: number, day: number);
    constructor(date: number);
    static valueOf(s: string): Date;
    static valueOf(date: any): Date;
    static from(instant: any): any;
    static parse(s: string): number;
    static UTC(year: number, month: number, date: number, hrs: number, min: number, sec: number): number;
}
