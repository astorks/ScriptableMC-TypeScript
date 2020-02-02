export default interface Time {
    setTime(time: number): void;
    toInstant(): any;
    getYear(): number;
    getDate(): number;
    setYear(i: number): void;
    getMonth(): number;
    setMonth(i: number): void;
    setDate(i: number): void;
    getDay(): number;
    toLocalTime(): any;
    clone(): any;
    compareTo(anotherDate: any): number;
    compareTo(arg0: any): number;
    before(when: any): boolean;
    after(when: any): boolean;
    getTime(): number;
    getSeconds(): number;
    getHours(): number;
    setHours(hours: number): void;
    getMinutes(): number;
    setMinutes(minutes: number): void;
    setSeconds(seconds: number): void;
    toLocaleString(): string;
    toGMTString(): string;
    getTimezoneOffset(): number;
}
export default class Time {
    static get $javaClass(): any;
    constructor(hour: number, minute: number, second: number);
    constructor(time: number);
    static valueOf(time: any): Time;
    static valueOf(s: string): Time;
    static from(instant: any): any;
    static parse(s: string): number;
    static UTC(year: number, month: number, date: number, hrs: number, min: number, sec: number): number;
}
