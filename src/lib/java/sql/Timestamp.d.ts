export default interface Timestamp {
    compareTo(ts: Timestamp): number;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    before(ts: Timestamp): boolean;
    after(ts: Timestamp): boolean;
    getTime(): number;
    setTime(time: number): void;
    toInstant(): any;
    toLocalDateTime(): any;
    getNanos(): number;
    setNanos(n: number): void;
    clone(): any;
    before(when: any): boolean;
    after(when: any): boolean;
    getSeconds(): number;
    getYear(): number;
    getDate(): number;
    setYear(year: number): void;
    getMonth(): number;
    setMonth(month: number): void;
    setDate(date: number): void;
    getDay(): number;
    getHours(): number;
    setHours(hours: number): void;
    getMinutes(): number;
    setMinutes(minutes: number): void;
    setSeconds(seconds: number): void;
    toLocaleString(): string;
    toGMTString(): string;
    getTimezoneOffset(): number;
}
export default class Timestamp {
    static get $javaClass(): any;
    constructor(year: number, month: number, date: number, hour: number, minute: number, second: number, nano: number);
    constructor(time: number);
    static valueOf(dateTime: any): Timestamp;
    static valueOf(s: string): Timestamp;
    static from(instant: any): Timestamp;
    static from(instant: any): any;
    static parse(s: string): number;
    static UTC(year: number, month: number, date: number, hrs: number, min: number, sec: number): number;
}
