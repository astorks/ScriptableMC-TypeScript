export default interface Date {
    setTime(date: number): void;
    getSeconds(): number;
    toInstant(): any;
    getHours(): number;
    setHours(i: number): void;
    getMinutes(): number;
    setMinutes(i: number): void;
    setSeconds(i: number): void;
    toLocalDate(): any;
    clone(): any;
    compareTo(anotherDate: any): number;
    compareTo(arg0: any): number;
    before(when: any): boolean;
    after(when: any): boolean;
    getTime(): number;
    getYear(): number;
    getDate(): number;
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
    static valueOf(date: any): Date;
    static valueOf(s: string): Date;
    static from(instant: any): any;
    static parse(s: string): number;
    static UTC(year: number, month: number, date: number, hrs: number, min: number, sec: number): number;
}
