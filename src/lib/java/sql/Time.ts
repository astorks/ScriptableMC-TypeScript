declare var Java: any;

export default interface Time {
	after(when: any): boolean;
	before(when: any): boolean;
	clone(): any;
	compareTo(anotherDate: any): number;
	compareTo(arg0: any): number;
	getDate(): number;
	getDay(): number;
	getHours(): number;
	getMinutes(): number;
	getMonth(): number;
	getSeconds(): number;
	getTime(): number;
	getTimezoneOffset(): number;
	getYear(): number;
	setDate(i: number): void;
	setHours(hours: number): void;
	setMinutes(minutes: number): void;
	setMonth(i: number): void;
	setSeconds(seconds: number): void;
	setTime(time: number): void;
	setYear(i: number): void;
	toGMTString(): string;
	toInstant(): any;
	toLocalTime(): any;
	toLocaleString(): string;
}

export default class Time {
	public static get $javaClass(): any {
		return Java.type('java.sql.Time');
	}

	constructor(time: number);
	constructor(hour: number, minute: number, second: number);
	constructor(...args: any[]) {
		return new Time.$javaClass(...args);
	}

	public static UTC(year: number, month: number, date: number, hrs: number, min: number, sec: number): number;
	public static UTC(...args: any[]): any {
		return Time.$javaClass.UTC(...args);
	}

	public static from(instant: any): any;
	public static from(...args: any[]): any {
		return Time.$javaClass.from(...args);
	}

	public static parse(s: string): number;
	public static parse(...args: any[]): any {
		return Time.$javaClass.parse(...args);
	}

	public static valueOf(s: string): Time;
	public static valueOf(time: any): Time;
	public static valueOf(...args: any[]): any {
		return Time.$javaClass.valueOf(...args);
	}

}

