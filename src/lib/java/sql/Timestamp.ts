declare var Java: any;

export default interface Timestamp {
	after(ts: Timestamp): boolean;
	after(when: any): boolean;
	before(ts: Timestamp): boolean;
	before(when: any): boolean;
	clone(): any;
	compareTo(o: any): number;
	compareTo(ts: Timestamp): number;
	compareTo(arg0: any): number;
	getDate(): number;
	getDay(): number;
	getHours(): number;
	getMinutes(): number;
	getMonth(): number;
	getNanos(): number;
	getSeconds(): number;
	getTime(): number;
	getTimezoneOffset(): number;
	getYear(): number;
	setDate(date: number): void;
	setHours(hours: number): void;
	setMinutes(minutes: number): void;
	setMonth(month: number): void;
	setNanos(n: number): void;
	setSeconds(seconds: number): void;
	setTime(time: number): void;
	setYear(year: number): void;
	toGMTString(): string;
	toInstant(): any;
	toLocalDateTime(): any;
	toLocaleString(): string;
}

export default class Timestamp {
	public static get $javaClass(): any {
		return Java.type('java.sql.Timestamp');
	}

	constructor(time: number);
	constructor(year: number, month: number, date: number, hour: number, minute: number, second: number, nano: number);
	constructor(...args: any[]) {
		return new Timestamp.$javaClass(...args);
	}

	public static UTC(year: number, month: number, date: number, hrs: number, min: number, sec: number): number;
	public static UTC(...args: any[]): any {
		return Timestamp.$javaClass.UTC(...args);
	}

	public static from(instant: any): Timestamp;
	public static from(instant: any): any;
	public static from(...args: any[]): any {
		return Timestamp.$javaClass.from(...args);
	}

	public static parse(s: string): number;
	public static parse(...args: any[]): any {
		return Timestamp.$javaClass.parse(...args);
	}

	public static valueOf(s: string): Timestamp;
	public static valueOf(dateTime: any): Timestamp;
	public static valueOf(...args: any[]): any {
		return Timestamp.$javaClass.valueOf(...args);
	}

}

